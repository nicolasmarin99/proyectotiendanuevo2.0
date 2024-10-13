import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';
import { Camera, CameraResultType } from '@capacitor/camera';



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
  precio: number=0;
  imagen: string | undefined; // Asegúrate de que esto está en tu clase // Aquí se almacenará la imagen seleccionada
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

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });
  
      const imageUrl = image.webPath; // URL local de la imagen
      this.imagen = imageUrl; // Asigna la URL a this.imagen
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
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

  validarZapatilla() { 
    if (this.zapatilla && this.cantidad && this.precio && this.talla && this.marca) {
      // Asegúrate de que this.imagen tenga un valor definido
      const imagenProducto = this.imagen ? this.imagen : ''; // Asigna un valor por defecto si es undefined
  
      this.dbService.agregarProducto(this.zapatilla, this.marca, this.talla, this.precio, this.cantidad, imagenProducto)
        .then(() => {
          console.log('Producto agregado con éxito');
          // Puedes hacer algo después de agregar el producto, como redirigir o mostrar un mensaje
        })
        .catch((error) => {
          console.error('Error al agregar el producto:', error);
        });
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  }
}
