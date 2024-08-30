import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  terminoBusqueda: string = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    this.router.navigate(['/producto'])
  }
  irInicio(){
    this.router.navigate(['/inicio'])
  }
  irZapatillas(){
    this.router.navigate(['/zapatillas'])
  }
  irCompras(){
    this.router.navigate(['/listadocompras'])
  }

}
