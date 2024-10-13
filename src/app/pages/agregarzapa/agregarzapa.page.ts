import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-agregarzapa',
  templateUrl: './agregarzapa.page.html',
  styleUrls: ['./agregarzapa.page.scss'],
})
export class AgregarzapaPage implements OnInit {

  zapatilla: string = '';
  cantidad: number = 0;
  talla: string = '';
  marca: string = '';
  usuarioRol: number | null = null; // Aquí se almacenará el rol del usuario

  constructor(private router: Router,private alertController: AlertController, private dbService:ServiciobdService) { }

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

  validarZapatilla(){
    if((this.zapatilla == '' ) || (this.cantidad == null) || (this.talla == '' ) || (this.marca == '' )){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if(this.cantidad < 0){
      this.presentAlert('Error','La cantidad debe ser un numero positivo.')
    }
    else{
      this.presentAlert('Exito','La zapatilla ha sido ingresada correctamente.')
      this.router.navigate(['/zapatillasad'])
    }
  }
}
