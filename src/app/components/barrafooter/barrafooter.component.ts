import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrafooter',
  templateUrl: './barrafooter.component.html',
  styleUrls: ['./barrafooter.component.scss'],
})
export class BarrafooterComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  irInicio(){
    this.router.navigate(['/inicio'])
  }
  irZapatillas(){
    this.router.navigate(['/zapatillas'])
  }
  irCompras(){
    this.router.navigate(['/listadocompras'])
  }
  irCarrito(){
    this.router.navigate(['/carrito'])
  }
}
