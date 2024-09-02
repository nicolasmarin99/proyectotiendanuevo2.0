import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarzapaPage } from './editarzapa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarzapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarzapaPageRoutingModule {}
