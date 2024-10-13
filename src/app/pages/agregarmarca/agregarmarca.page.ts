import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-agregarmarca',
  templateUrl: './agregarmarca.page.html',
  styleUrls: ['./agregarmarca.page.scss'],
})
export class AgregarmarcaPage implements OnInit {

  marca: string = '';
  usuarioRol: number | null = null; // Aquí se almacenará el rol del usuario
  
  constructor(private router: Router,private alertController: AlertController,private dbService: ServiciobdService) { }

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
