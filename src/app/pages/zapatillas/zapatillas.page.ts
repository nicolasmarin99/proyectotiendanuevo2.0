import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.page.html',
  styleUrls: ['./zapatillas.page.scss'],
})
export class ZapatillasPage implements OnInit {

  terminoBusqueda: string = "";

  constructor(private router: Router,private menu: MenuController) { }

  ngOnInit() {
  }
  irProducto(){
    this.router.navigate(['/producto'])
  }
  irInicio(){
    this.router.navigate(['/inicio'])
  }
  
}
