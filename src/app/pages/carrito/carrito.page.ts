import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  alertButtons = ['Cerrar'];
  
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

  comprar(){
    this.presentAlert('Aprobada','La compra ha sido realizada con exito.')
    this.router.navigate(['/inicio'])
  }
}
