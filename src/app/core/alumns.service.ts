import { Injectable } from '@angular/core';
import { Alumn } from '.././features/dashboard/alumns/models/model';
import { delay, map, Observable, of } from 'rxjs';

let DATABASE: Alumn[] = [
  {
    id: 'RtPs3',
    firstName: 'Pepe',
    lastName: 'El Grillo',
    createdAt: new Date(),
    email: 'Pepeelgrillo@hotmail.com',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AlumnsService {
  constructor() {}

  getById(id: string): Observable<Alumn | undefined> {
    return this.getAlumns().pipe(map((alumns) => alumns.find((u) => u.id === id)));
  }

  getAlumns(): Observable<Alumn[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 1500);
    });
  }

  removeUserById(id: string): Observable<Alumn[]> {
    DATABASE = DATABASE.filter((user) => user.id != id);
    return of(DATABASE).pipe(delay(1000));
  }

  updateUserById(id: string, update: Partial<Alumn>) {
    DATABASE = DATABASE.map((user) =>
      user.id === id ? { ...user, ...update } : user
    );

    return new Observable<Alumn[]>((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 1000);
    });
  }
}
