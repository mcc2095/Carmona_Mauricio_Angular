import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnsComponent } from './alumns.component';
import { AlumnsDialogComponent } from './alumns-dialog/alumns-dialog.component';

const routes: Routes = [

  {
    path: '',
    component: AlumnsComponent,
  },
  {
    path: '',
    component: AlumnsDialogComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnsRoutingModule { }
