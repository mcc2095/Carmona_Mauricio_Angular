import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnsService } from '../../../../core/alumns.service';
import { Alumn } from '../models/model';

@Component({
  selector: 'app-alumns-detail',
  templateUrl: './alumns-detail.component.html',
  styleUrls: ['./alumns-detail.component.scss'],
})

export class Alumns implements OnInit {
  idAlumno?: string;
  alumn?: Alumn;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnsService: AlumnsService
  ) {
    this.idAlumno = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.alumnsService
      .getById(this.idAlumno!)
      .subscribe({
        next: (alumn) => {
          this.alumn = alumn;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }
}
