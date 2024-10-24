import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AbmAlumns } from '../features/dashboard/abm-alumns/models/model';
import { generateRandomString } from '../features/shared/utils/index';

let Alumns_DB: AbmAlumns[] = [
   
];

@Injectable({ providedIn: 'root' })
export class AlumnsService {

    getCategories(): Observable<AbmAlumns[]> {
        return of([...Alumns_DB]);
    }

    createAlumns(
        Alumns: Omit<AbmAlumns, 'id' | 'createdAt'>
    ): Observable<AbmAlumns> {
        // Si estás usando firstName y lastName, tu modelo AbmAlumns debe tener estas propiedades
        const AlumnsCreated = {
            ...Alumns,
            name: `${Alumns.firstName} ${Alumns.lastName}`, // Asegúrate de que firstName y lastName existan en Alumns
            id: generateRandomString(4),
            createdAt: new Date(),
        };
        Alumns_DB.push(AlumnsCreated);
        return of(AlumnsCreated);
    }

    editAlumns(id: string, Alumns: Partial<AbmAlumns>): Observable<AbmAlumns> {
        const AlumnsToEdit = Alumns_DB.find((cat) => cat.id === id);

        if (!AlumnsToEdit) {
            return throwError(() => new Error('No se encontró el alumno.'));
        }

        Alumns_DB = Alumns_DB.map((cat) =>
            cat.id === id ? { ...AlumnsToEdit, ...Alumns } : cat
        );

        return of({ ...AlumnsToEdit, ...Alumns });
    }
}
