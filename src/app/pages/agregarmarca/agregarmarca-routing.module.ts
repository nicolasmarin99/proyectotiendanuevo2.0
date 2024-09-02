import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarmarcaPage } from './agregarmarca.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarmarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarmarcaPageRoutingModule {}
