import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacomprasadPage } from './listacomprasad.page';

const routes: Routes = [
  {
    path: '',
    component: ListacomprasadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacomprasadPageRoutingModule {}
