import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  email1: string = "";
  constructor(private router: Router,private alertController: AlertController) { }

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
