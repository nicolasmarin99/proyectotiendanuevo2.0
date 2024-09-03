import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { BarrabusquedaComponent } from '../barrabusqueda/barrabusqueda.component';
import { BarrafooterComponent } from '../barrafooter/barrafooter.component';
import { CardinicioComponent } from '../cardinicio/cardinicio.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BarranavComponent } from '../barranav/barranav.component';
import { Barrafooter2Component } from '../barrafooter2/barrafooter2.component';



@NgModule({
  declarations: [LogoComponent,BarrabusquedaComponent, BarrafooterComponent, CardinicioComponent, BarranavComponent, Barrafooter2Component],
  exports: [LogoComponent, BarrabusquedaComponent, BarrafooterComponent, CardinicioComponent, BarranavComponent, Barrafooter2Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class Paquete1Module { }
