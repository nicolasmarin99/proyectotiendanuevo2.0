import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/autentificacion.service'; // Asegúrate de importar el servicio de autenticación

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.scss'],
})
export class BarranavComponent implements OnInit {
  
  @Input() titulo: string = "";
  @Input() tipousuario: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {}

  irPerfil() {
    // Comprueba si hay un usuario autenticado
    if (this.authService.isLoggedIn()) {
      // Obtiene el nombre del usuario autenticado
      const usuario = this.authService.getUser();
      // Aquí podrías realizar lógica adicional si deseas mostrar perfiles diferentes según el usuario
      this.router.navigate(['/perfil']); // Redirige al perfil del usuario
    } else {
      this.router.navigate(['/login']); // Si no hay usuario autenticado, redirige al login
    }
  }
}