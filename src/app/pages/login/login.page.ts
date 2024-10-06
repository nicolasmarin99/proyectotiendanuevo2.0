import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from 'src/app/services/serviciobd.service'; // Importa el servicio de base de datos

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario1: string = '';
  contrasena1: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dbService: ServiciobdService // Inyecta el servicio de base de datos
  ) {}

  ngOnInit() {}

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  validarUsuario() {
    if (this.usuario1 === '' || this.contrasena1 === '') {
      this.presentAlert('Error', 'Los campos no pueden estar vacíos.');
      return;
    }

    // Consulta la base de datos para verificar si el usuario existe
    this.dbService.executeQuery(
      'SELECT * FROM Usuario WHERE nombre_usuario = ? AND contraseña = ?', 
      [this.usuario1, this.contrasena1]
    ).then((res: any) => {
      if (res.rows.length > 0) {
        // Usuario encontrado, permitir acceso
        this.presentAlert('Éxito', 'Usted ha accedido exitosamente.');
        
        // Redirigir a la página de inicio con el nombre de usuario
        let navigationextras: NavigationExtras = {
          state: {
            user: this.usuario1
          }
        };
        this.router.navigate(['/inicio'], navigationextras);
      } else {
        // Usuario no encontrado, mostrar error
        this.presentAlert('Error', 'Usuario o contraseña incorrectos.');
      }
    }).catch(err => {
      console.error('Error al validar el usuario:', err);
      this.presentAlert('Error', 'Ocurrió un problema al intentar iniciar sesión.');
    });
  }

  irRegistro() {
    this.router.navigate(['/registrar']);
  }

  irCambiarContra() {
    this.router.navigate(['/cambiarcontra']);
  }
}