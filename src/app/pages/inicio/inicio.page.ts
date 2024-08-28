import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  terminoBusqueda: string = "";
  
  constructor(private router: Router) { }

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
}
