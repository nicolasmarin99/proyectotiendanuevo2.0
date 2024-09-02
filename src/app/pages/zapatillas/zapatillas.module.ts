import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZapatillasPageRoutingModule } from './zapatillas-routing.module';

import { ZapatillasPage } from './zapatillas.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZapatillasPageRoutingModule,
    Paquete1Module
  ],
  declarations: [ZapatillasPage]
})
export class ZapatillasPageModule {}
