import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  contrasena1:string = "";
  contrasenarepetida: string = "";
  usuarioRol: number | null = null; // Aquí se almacenará el rol del usuario
  constructor(private router: Router,private alertController: AlertController,private dbService:ServiciobdService) { }

  ngOnInit() {
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  ionViewDidEnter() {
    const id_usuario = localStorage.getItem('id_usuario');
    if (id_usuario) {
      this.dbService.obtenerRolUsuario(Number(id_usuario)).then(rol => {
        this.usuarioRol = rol;
      }).catch(error => {
        console.error('Error al obtener el rol del usuario:', error);
      });
    }
  }

  validarContrasena(){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if((this.contrasena1 == '') || (this.contrasenarepetida == '')) {
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if(!passwordRegex.test(this.contrasena1)){
      this.presentAlert('Error', 'La contraseña ingresada no puede tener menos de 8 caracteres, debe contener una mayuscula, un numero y un caracter especial Ej: @')
    }
    else{
      this.presentAlert('Exito', 'La contraseña se ha cambiado exitosamente')
      this.router.navigate(['/inicio'])
    }
  }
}
