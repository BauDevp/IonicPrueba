import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprobSolicPage } from './aprob-solic.page';

const routes: Routes = [
  {
    path: '',
    component: AprobSolicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprobSolicPageRoutingModule {}
