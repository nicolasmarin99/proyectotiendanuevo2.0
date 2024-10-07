import { Injectable } from '@angular/core';
import { ServiciobdService } from 'src/app/services/serviciobd.service'; // Importa tu servicio de base de datos

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUser: string | null = null;

  constructor(private dbService: ServiciobdService) {}

  // Método para iniciar sesión
  async login(usuario: string, contraseña: string): Promise<boolean> {
    // Consulta la base de datos para verificar las credenciales
    const result = await this.dbService.executeQuery(
      'SELECT * FROM Usuario WHERE nombre_usuario = ? AND contraseña = ?', 
      [usuario, contraseña]
    );

    // Si se encuentra un usuario, establecer el estado de autenticación
    if (result.rows.length > 0) {
      this.isAuthenticated = true;
      this.currentUser = usuario; // Guarda el nombre de usuario actual
      localStorage.setItem('user', usuario); // Almacena el usuario en localStorage
      return true; // Inicio de sesión exitoso
    } else {
      return false; // Credenciales incorrectas
    }
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('user'); // Limpia la información del usuario
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated; // Puedes también verificar si hay un 'user' en localStorage
  }

  // Método para obtener información del usuario
  getUser(): string | null {
    return localStorage.getItem('user');
  }
}