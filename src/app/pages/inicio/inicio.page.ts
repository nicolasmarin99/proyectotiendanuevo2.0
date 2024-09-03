import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  terminoBusqueda: string = "";
  usuario: string = "";
  
  constructor(private router: Router, private activerouter: ActivatedRoute) {
    this.activerouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      }
    })
   }

  ngOnInit() {
  }

  irZapatillasad(){
    this.router.navigate(['/zapatillasad'])
  }
  irListacomprasad(){
    this.router.navigate(['/listacomprasad'])
  }
  irInicio(){
    this.router.navigate(['/inicio'])
  }
}
