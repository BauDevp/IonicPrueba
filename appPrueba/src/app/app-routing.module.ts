import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./pages/solicitud/solicitud.module').then( m => m.SolicitudPageModule)
  },
  {
    path: 'aprobacion',
    loadChildren: () => import('./pages/aprob-solic/aprob-solic.module').then( m => m.AprobSolicPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'soli-retiro',
    loadChildren: () => import('./pages/soli-retiro/soli-retiro.module').then( m => m.SoliRetiroPageModule)
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
