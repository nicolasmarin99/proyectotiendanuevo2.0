import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  contrasena1:string = "";
  contrasenarepetida: string = "";
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
