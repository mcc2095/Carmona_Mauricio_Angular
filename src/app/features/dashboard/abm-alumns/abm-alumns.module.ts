import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmAlumnsRoutingModule } from './abm-alumns-routing.module';
import { AbmAlumnsComponent } from './abm-alumns.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AbmAlumnsComponent
  ],
  imports: [
    CommonModule,
    AbmAlumnsRoutingModule,
    SharedModule
  ],
  exports: [
    AbmAlumnsComponent
  ]
})
export class AbmAlumnsModule { }
