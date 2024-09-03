import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  usuario1: string = "";
  email1: string = "";
  contrasena1: string = "";
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

  validarRegistro(){

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ((this.usuario1 =="") || (this.email1 =="") || (this.contrasena1 =="") || (this.contrasenarepetida =="")){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if((this.usuario1 =="MarkusAce")|| (this.usuario1 =="NicolasMa")){
      this.presentAlert('Error','El nombre de usuario ya existe.')
    }
    else if(!correoRegex.test(this.email1)){
      this.presentAlert('Error','El email no es válido.')
    }
    else if(!passwordRegex.test(this.contrasena1)){
      this.presentAlert('Error', 'La contraseña ingresada no puede tener menos de 8 caracteres, debe contener una mayuscula, un numero y un caracter especial Ej: @')
    }
    else if(this.contrasenarepetida != this.contrasena1){
      this.presentAlert('Error','Las contraseñas ingresadas no coinciden.')
    }
    else{
      this.presentAlert('Exito','Usted se ha registrado exitosamente.')
      this.router.navigate(['/login']);
    }
  }

  irLogin(){
    this.router.navigate(['/login']);
  }
}
