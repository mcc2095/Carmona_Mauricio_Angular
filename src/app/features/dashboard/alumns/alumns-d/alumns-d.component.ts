import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomString } from '../../../shared/utils';
import { Alumns } from '../models/model';

interface AlumnsDialogData {
  editingAlumns?: Alumns;
}

@Component({
  selector: 'app-Alumns-dialog',
  templateUrl: '../alumns.component.html',
  styles: ``,
})
export class AlumnsDialogComponent {
openModal() {
throw new Error('Method not implemented.');
}
  AlumnsForm: FormGroup;
dataSource: any;

  constructor(
    private matDialogRef: MatDialogRef<AlumnsDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: AlumnsDialogData
  ) {
    this.AlumnsForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
    this.patchFormValue();
  }

  private get isEditing() {
    return !!this.data?.editingAlumns;
  }

  patchFormValue() {
    if (this.data?.editingAlumns) {
      this.AlumnsForm.patchValue(this.data.editingAlumns);
    }
  }

  onSave(): void {
    if (this.AlumnsForm.invalid) {
      this.AlumnsForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.AlumnsForm.value,
        id: this.isEditing
          ? this.data!.editingAlumns!.id
          : generateRandomString(4),
        createdAt: this.isEditing
          ? this.data!.editingAlumns!.createdAt
          : new Date(),
      });
    }
  }
}