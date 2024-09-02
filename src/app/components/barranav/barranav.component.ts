import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.scss'],
})
export class BarranavComponent  implements OnInit {

  @Input() titulo: string = "";
  constructor(private router: Router) { }

  ngOnInit() {}
  irPerfil(){
    this.router.navigate(['/perfil'])
  }
}
