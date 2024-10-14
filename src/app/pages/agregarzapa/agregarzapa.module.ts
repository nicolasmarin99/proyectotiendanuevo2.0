import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarZapaPageRoutingModule } from './agregarzapa-routing.module';

import { AgregarZapaPage } from './agregarzapa.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarZapaPageRoutingModule,
    Paquete1Module
  ],
  declarations: [AgregarZapaPage]
})
export class AgregarZapaPageModule {}
