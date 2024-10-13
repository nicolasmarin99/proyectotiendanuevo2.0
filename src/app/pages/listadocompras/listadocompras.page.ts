import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciobdService } from 'src/app/services/serviciobd.service';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.page.html',
  styleUrls: ['./listadocompras.page.scss'],
})
export class ListadocomprasPage implements OnInit {
  terminoBusqueda:string = "";
  usuarioRol: number | null = null; // Aquí se almacenará el rol del usuario
  constructor(private router:Router, private dbService:ServiciobdService) { }

  

  ngOnInit() {
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
  irInicio(){
    this.router.navigate(['/inicio'])
  }
  
}
