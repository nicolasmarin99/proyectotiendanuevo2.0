import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadocomprasPageRoutingModule } from './listadocompras-routing.module';

import { ListadocomprasPage } from './listadocompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadocomprasPageRoutingModule
  ],
  declarations: [ListadocomprasPage]
})
export class ListadocomprasPageModule {}
