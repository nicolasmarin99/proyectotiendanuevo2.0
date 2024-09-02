import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadocomprasPageRoutingModule } from './listadocompras-routing.module';

import { ListadocomprasPage } from './listadocompras.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadocomprasPageRoutingModule,
    Paquete1Module,
    
  ],
  declarations: [ListadocomprasPage]
})
export class ListadocomprasPageModule {}
