import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  email1: string = "";
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
  validarCambioContra(){
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(this.email1== ''){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if(!correoRegex.test(this.email1)){
      this.presentAlert('Error','El email no es válido.')
    }
    else{
      this.presentAlert('Enviado','El correo fue enviado con exito.')
      this.router.navigate(['/cambiarcontrasena'])
    }
  }
}
