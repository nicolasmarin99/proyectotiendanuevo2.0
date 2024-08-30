import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadocomprasPage } from './listadocompras.page';

const routes: Routes = [
  {
    path: '',
    component: ListadocomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadocomprasPageRoutingModule {}
