import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrafooter2',
  templateUrl: './barrafooter2.component.html',
  styleUrls: ['./barrafooter2.component.scss'],
})
export class Barrafooter2Component  implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {}

  irInicio(){
    this.router.navigate(['/inicio'])
  }
  irZapatillasad(){
    this.router.navigate(['/zapatillasad'])
  }
  irListacomprasad(){
    this.router.navigate(['/listacomprasad'])
  }
  
  irCarrito(){
    this.router.navigate(['/carrito'])
  }
}
