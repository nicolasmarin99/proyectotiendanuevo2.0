import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacomprasadPageRoutingModule } from './listacomprasad-routing.module';

import { ListacomprasadPage } from './listacomprasad.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacomprasadPageRoutingModule,
    Paquete1Module
  ],
  declarations: [ListacomprasadPage]
})
export class ListacomprasadPageModule {}
