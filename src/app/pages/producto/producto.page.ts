import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  terminoBusqueda: string = "";
  talla: string = "";
  marca: string = "";
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

  validarProducto(){
    if ((this.talla== '') || (this.marca== '')){
      this.presentAlert('Error','Los campos no pueden estar vacios')
    }

    else{
      this.presentAlert('Exito','Los productos se añadieron correctamente.')
      this.router.navigate(['/carrito'])
    }
  }
}
