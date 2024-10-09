import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service'; // Importar tu servicio de base de datos

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  arregloUsuarios: any =[{
    usuario:'',
    email: '',
    ciudad: '',
    calle: '',
    numeroDomicilio:'',
  }]

  constructor(private router: Router, private dbService: ServiciobdService, private alertController:AlertController,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.dbService.dbState().subscribe(data=>{
      if(data){
        this.dbService.fetchUsuarios().subscribe(res=>{
          this.arregloUsuarios=res;
        })
      }

    })
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
    localStorage.removeItem('idUsuario'); // Eliminar la sesión al cerrar
    this.presentAlert('Adiós', 'Usted ha cerrado sesión.');
    this.router.navigate(['/login']);
  }

  irEditarperfil() {
    this.router.navigate(['/editarperfil']);
  }
}