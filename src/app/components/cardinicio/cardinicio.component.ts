import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardinicio',
  templateUrl: './cardinicio.component.html',
  styleUrls: ['./cardinicio.component.scss'],
})
export class CardinicioComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  irPagina(){
    this.router.navigate(['/producto'])
  }
}
