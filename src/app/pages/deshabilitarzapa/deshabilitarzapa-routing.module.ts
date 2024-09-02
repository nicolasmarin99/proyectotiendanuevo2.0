import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeshabilitarzapaPage } from './deshabilitarzapa.page';

const routes: Routes = [
  {
    path: '',
    component: DeshabilitarzapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeshabilitarzapaPageRoutingModule {}
