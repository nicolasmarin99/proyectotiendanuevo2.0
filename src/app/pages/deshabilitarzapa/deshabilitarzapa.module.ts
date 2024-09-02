import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeshabilitarzapaPageRoutingModule } from './deshabilitarzapa-routing.module';

import { DeshabilitarzapaPage } from './deshabilitarzapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeshabilitarzapaPageRoutingModule
  ],
  declarations: [DeshabilitarzapaPage]
})
export class DeshabilitarzapaPageModule {}
