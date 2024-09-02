import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarcontrasenaPageRoutingModule } from './cambiarcontrasena-routing.module';

import { CambiarcontrasenaPage } from './cambiarcontrasena.page';
import { Paquete1Module } from 'src/app/components/paquete1/paquete1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarcontrasenaPageRoutingModule,
    Paquete1Module
  ],
  declarations: [CambiarcontrasenaPage]
})
export class CambiarcontrasenaPageModule {}
