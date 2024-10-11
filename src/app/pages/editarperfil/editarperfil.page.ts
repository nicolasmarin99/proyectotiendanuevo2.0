import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  // Variables para almacenar los datos editables del usuario
  id_usuario!: number;
  nombre_usuario!: string;
  ciudad!: string;
  calle!: string;
  numero_domicilio!: string;
  region!:string;
  usuario: any;

  constructor(
    private router: Router, 
    private dbService: ServiciobdService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  // Cargar los datos del usuario desde la base de datos
  cargarDatosUsuario() {
    this.dbService.seleccionarUsuario().then(() => {
      this.dbService.fetchUsuarios().subscribe((usuarios) => {
        if (usuarios && usuarios.length > 0) {
          const usuario = usuarios[0];
          this.id_usuario = usuario.id_usuario;
          this.nombre_usuario = usuario.nombre_usuario;
          
          // Llamar a la función para obtener la dirección del usuario
          this.dbService.obtenerDireccionUsuario(this.id_usuario).then((direccion) => {
            if (direccion) {
              this.ciudad = direccion.ciudad;
              this.calle = direccion.calle;
              this.numero_domicilio = direccion.numero_domicilio;
              this.region = direccion.region;
            }
          });
        }
      });
    });
  }

  // Función para guardar los cambios en la base de datos
  guardarCambios() {
    this.dbService.actualizarUsuario(this.id_usuario, this.nombre_usuario, this.ciudad, this.calle, this.numero_domicilio,this.region).then(() => {
      this.presentAlert('Éxito', 'Los cambios han sido guardados.');
      this.router.navigate(['/perfil']); // Redirige de vuelta a la página de perfil
    }).catch(error => {
      console.error('Error al actualizar el perfil:', error);
      this.presentAlert('Error', 'Hubo un problema al guardar los cambios.');
    });
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
}