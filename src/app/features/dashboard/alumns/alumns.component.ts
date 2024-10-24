import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnsDialogComponent } from './alumns-dialog/alumns-dialog.component.js';
import { Alumn } from './models/model.js';

const ELEMENT_DATA: Alumn[] = [
  {
    id: '0001',
    firstName: 'Pepe',
    lastName: 'Grillo',
    createdAt: new Date(),
    email: 'pepeelgrillo@gmail.com',
  },
];

@Component({
  selector: 'app-Alumns',
  templateUrl: './alumns.component.html',
  styleUrl: './alumns.component.scss',
})
export class AlumnsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource = ELEMENT_DATA;

  usuario = {
    nombre: 'Esteban',
    apellido: 'Quito',
  };

  constructor(private matDialog: MatDialog) {}

  onDelete(id: string) {
    if (confirm('Esta seguro?')) {
      this.dataSource = this.dataSource.filter((Alumns) => Alumns.id !== id);
    }
  }

  openModal(editingAlumns?: Alumn): void {
    this.matDialog
      .open(AlumnsDialogComponent, {
        data: {
          editingAlumns,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            if (editingAlumns) {
              this.dataSource = this.dataSource.map((Alumns) =>
                Alumns.id === editingAlumns.id ? { ...Alumns, ...result } : Alumns
              );
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }
}
