import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadocompras',
  templateUrl: './listadocompras.page.html',
  styleUrls: ['./listadocompras.page.scss'],
})
export class ListadocomprasPage implements OnInit {
  terminoBusqueda:string = "";
  constructor(private router:Router) { }

  

  ngOnInit() {
  }
  irInicio(){
    this.router.navigate(['/inicio'])
  }
  
}
