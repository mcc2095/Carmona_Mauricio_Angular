import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsComponent } from './alumns.component';
import { SharedModule } from '../../shared/shared.module';
import { AlumnsDetailComponent } from './alumns-detail/alumns-detail.component';
import { AlumnsDialogComponent } from './alumns-dialog/alumns-dialog.component';


@NgModule({
  declarations: [
    AlumnsComponent,
    AlumnsDetailComponent,
    AlumnsDialogComponent,
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule,
    SharedModule
  ],
  exports: [
    AlumnsComponent
    
  ]
})
export class AlumnsModule { }
