import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsComponent } from './alumns.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AlumnsComponent
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
