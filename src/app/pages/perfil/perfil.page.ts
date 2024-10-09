import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
   // Variables para almacenar los datos del usuario
  id_usuario!: number;
  nombre_usuario!: string;
  email!: string;

  constructor(
    private router: Router, 
    private dbService: ServiciobdService, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.obtenerUsuario();
  }

   // Función para obtener la información del usuario
  obtenerUsuario() {
    this.dbService.seleccionarUsuario().then(() => {
      this.dbService.fetchUsuarios().subscribe((usuarios) => {
        if (usuarios && usuarios.length > 0) {
          // Asigna los datos del usuario logueado a las variables locales
          const usuario = usuarios[0];
          this.id_usuario = usuario.id_usuario;
          this.nombre_usuario = usuario.nombre_usuario;
          this.email = usuario.email;
        }
      });
    }).catch((e) => {
      console.error('Error al obtener la información del usuario:', e);
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

  cerrarSesion() {
    localStorage.removeItem('idUsuario');
    this.presentAlert('Adiós', 'Usted ha cerrado sesión.');
    this.router.navigate(['/login']);
  }

  irEditarperfil() {
    this.router.navigate(['/editarperfil']);
  }
}