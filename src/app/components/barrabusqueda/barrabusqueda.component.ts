import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrabusqueda',
  templateUrl: './barrabusqueda.component.html',
  styleUrls: ['./barrabusqueda.component.scss'],
})
export class BarrabusquedaComponent  implements OnInit {

  terminoBusqueda: string = "";

  @Input() mensaje: string = "";
  constructor(private router: Router) { }

  ngOnInit() {}

  irBusqueda(){
    this.router.navigate(['/buscar'])
  }
}
