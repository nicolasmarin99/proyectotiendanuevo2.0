import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

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
  region: string = "";
  ciudad: string = "";
  calle: string = "";
  tipodomicilio: string = "";
  numerodomicilio: string = "";

  constructor(private router: Router, private alertController: AlertController,private dbService:ServiciobdService) { }

  ngOnInit() { }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  validarRegistro() {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const direccionRegex = /^[A-Za-z\s]+$/;

    const numerodomicilioRegex = /^[A-Za-z0-9\s]+$/;

    if ((this.usuario1 == "") || (this.email1 == "") || (this.contrasena1 == "") || (this.contrasenarepetida == "") || (this.ciudad == "") || (this.region == "") || (this.calle == "") || (this.tipodomicilio == "" || (this.numerodomicilio == ""))) {
      this.presentAlert('Error', 'Los campos no pueden estar vacíos.')
    }
    else if ((this.usuario1 == "MarkusAce") || (this.usuario1 == "NicolasMa")) {
      this.presentAlert('Error', 'El nombre de usuario ya existe.')
    }
    else if (!correoRegex.test(this.email1)) {
      this.presentAlert('Error', 'El email no es válido.')
    }
    else if (!passwordRegex.test(this.contrasena1)) {
      this.presentAlert('Error', 'La contraseña ingresada no puede tener menos de 8 caracteres, debe contener una mayúscula, un número y un carácter especial Ej: @')
    }
    else if (!direccionRegex.test(this.calle)) {
      this.presentAlert('Error', 'La dirección ingresada no puede contener caracteres especiales ni números.')
    }
    else if (!direccionRegex.test(this.ciudad)) {
      this.presentAlert('Error', 'La ciudad ingresada no puede contener caracteres especiales ni números.')
    }
    else if (!numerodomicilioRegex.test(this.numerodomicilio)) {
      this.presentAlert('Error', 'el numero del domicilio no puede contener caracteres especiales')
    }
    else if (this.contrasenarepetida != this.contrasena1) {
      this.presentAlert('Error', 'Las contraseñas ingresadas no coinciden.')
    }
    else {
      this.presentAlert('Éxito', 'Usted se ha registrado exitosamente.')
      this.router.navigate(['/login']);
    }

    this.dbService.registrarUsuario(this.usuario1, this.email1, this.contrasena1, this.region, this.ciudad, this.calle, this.tipodomicilio, this.numerodomicilio)
    .then(() => {
      console.log('Registro exitoso');
      // Redirigir a la página de inicio de sesión o a otra página
      this.irLogin();
    })
    .catch(e => {
      console.error('Error al registrar usuario', e);
    });
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}