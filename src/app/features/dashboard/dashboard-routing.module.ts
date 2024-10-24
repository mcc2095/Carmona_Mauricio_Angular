import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'abm',
    loadChildren: () =>
      import('./abm-alumns/abm-alumns.module').then((m) => m.AbmAlumnsModule),
  },
  
  {
    path: 'alumns',
    loadChildren: () =>
      import('./alumns/alumns.module').then((m) => m.AlumnsModule),
  },
  
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
