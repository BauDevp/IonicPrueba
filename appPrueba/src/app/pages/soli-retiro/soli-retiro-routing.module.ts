import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliRetiroPage } from './soli-retiro.page';

const routes: Routes = [
  {
    path: '',
    component: SoliRetiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliRetiroPageRoutingModule {}
