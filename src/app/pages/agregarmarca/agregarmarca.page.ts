import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregarmarca',
  templateUrl: './agregarmarca.page.html',
  styleUrls: ['./agregarmarca.page.scss'],
})
export class AgregarmarcaPage implements OnInit {

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

  validarMarca(){
    if(this.marca==''){
      this.presentAlert('Error','Los campos no pueden estar vacios.')
    }
    else if(this.marca=='Puma', 'Adidas'){
      this.presentAlert('Error','La marca ingresada ya existe.')
    }
    else{
      this.presentAlert('Exito','La marca se ha ingresado exitosamente')
      this.router.navigate(['/zapatillasad'])
    }
  }
}
