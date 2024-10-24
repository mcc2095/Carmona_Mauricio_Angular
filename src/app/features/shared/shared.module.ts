import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AlumnsFullNamePipe } from './pipe/alumns-name.pipe';

import { ColorDirective } from './directives/color.directive';
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [AlumnsFullNamePipe, ColorDirective, RepeatDirective],
  imports: [CommonModule],
  exports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule,
    AlumnsFullNamePipe,
    ColorDirective,
    RepeatDirective,
  ],

})
export class SharedModule {}
