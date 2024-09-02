import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZapatillasadPageRoutingModule } from './zapatillasad-routing.module';

import { ZapatillasadPage } from './zapatillasad.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZapatillasadPageRoutingModule,
    Paquete1Module
  ],
  declarations: [ZapatillasadPage]
})
export class ZapatillasadPageModule {}
