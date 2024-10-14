import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-agregarzapa',
  templateUrl: './agregarzapa.page.html',
  styleUrls: ['./agregarzapa.page.scss'],
})
export class AgregarZapaPage {
  zapatilla: string = '';
  cantidad: number = 0;
  precio: number = 0;
  talla: string = '';
  marca: string = '';
  imagen: Blob | null = null; // Para almacenar la imagen como BLOB
  imagenPreview: string | null = null; // Para la vista previa de la imagen
  usuarioRol: number | null = null; // Aquí se almacenará el rol del usuario

  constructor(private servicioBD: ServiciobdService,private alertController:AlertController,private router:Router) {}

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });
  
      // Convertir la imagen a BLOB
      const response = await fetch(image.webPath!);
      const blob = await response.blob();
      this.imagen = blob;
  
      // Para mostrar la vista previa de la imagen
      if (image.webPath) {
        this.imagenPreview = image.webPath; // Asigna solo si no es undefined
      } else {
        this.imagenPreview = null; // Maneja el caso en que no hay webPath
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  // Método para agregar la zapatilla a la base de datos
  async agregarZapatilla() {
    try {
      if (this.zapatilla && this.cantidad > 0 && this.precio > 0 && this.talla && this.imagen && this.marca) {
        await this.servicioBD.agregarProducto(this.zapatilla, this.marca, this.talla, this.precio, this.cantidad, this.imagen);
        
        // Mostrar alerta de éxito
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Producto ingresado exitosamente.',
          buttons: [{
            text: 'Aceptar',
            handler: () => {
              // Redirigir a la página de inicio
              this.router.navigate(['/inicio']);
            }
          }]
        });

        await alert.present();
      } else {
        console.error('Por favor completa todos los campos.');
      }
    } catch (error) {
      console.error('Error al agregar la zapatilla:', error);
    }
  }
}