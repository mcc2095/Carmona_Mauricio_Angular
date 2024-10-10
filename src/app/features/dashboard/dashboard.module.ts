import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AlumnsModule } from './alumns/alumns.module';
import { SharedModule } from '../shared/shared.module';
import { AbmAlumnsModule } from './abm-alumns/abm-alumns.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AlumnsModule,
    AbmAlumnsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule {
}
