import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: string='';

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
  
  cerrarSesion(){
    let navigationextras: NavigationExtras = {
      state:{
        user: this.usuario
      }
    }
    this.presentAlert('Adios','Usted ha cerrado sesion.')
    this.router.navigate(['/inicio'], navigationextras);
  }
}
