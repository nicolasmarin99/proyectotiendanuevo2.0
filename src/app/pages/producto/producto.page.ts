import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  terminoBusqueda: string = "";
  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  irInicio(){
    this.router.navigate(['/inicio'])
  }
  irCarrito(){
    this.router.navigate(['/carrito'])
  }
}
