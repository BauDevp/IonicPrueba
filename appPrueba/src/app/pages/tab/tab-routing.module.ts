import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('../cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
      {
        path: 'solicitud',
        loadChildren: () => import('../solicitud/solicitud.module').then( m => m.SolicitudPageModule)
      },
      {
        path: 'aprobacion',
        loadChildren: () => import('../aprob-solic/aprob-solic.module').then( m => m.AprobSolicPageModule)
      },
      {
        path: 'soli-retiro',
        loadChildren: () => import('../soli-retiro/soli-retiro.module').then( m => m.SoliRetiroPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
