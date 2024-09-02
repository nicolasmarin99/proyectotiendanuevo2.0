import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listacomprasad',
  templateUrl: './listacomprasad.page.html',
  styleUrls: ['./listacomprasad.page.scss'],
})
export class ListacomprasadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irInicio(){
    this.router.navigate(['/inicio'])
  }
  
  irProducto(){
    this.router.navigate(['/producto'])
  }
}
