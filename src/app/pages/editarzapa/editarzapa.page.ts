import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarzapa',
  templateUrl: './editarzapa.page.html',
  styleUrls: ['./editarzapa.page.scss'],
})
export class EditarzapaPage implements OnInit {

  zapatilla: string = '';
  cantidad: number = 0;
  talla: string = '';
  marca: string = '';

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

  validarZapatilla(){
    if((this.zapatilla == '' ) || (this.cantidad == null) || (this.talla == '' ) || (this.marca == '' )){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if(this.cantidad < 0){
      this.presentAlert('Error','La cantidad debe ser un numero positivo.')
    }
    else{
      this.presentAlert('Exito','La zapatilla ha sido editada correctamente.')
      this.router.navigate(['/zapatillasad'])
    }
  }
}
