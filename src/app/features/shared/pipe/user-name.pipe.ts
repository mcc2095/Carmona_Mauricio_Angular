import { Pipe, PipeTransform } from '@angular/core';
import { Alumns } from '../../dashboard/alumns/models/model';

@Pipe({
  name: 'alumnsFullName',
})
export class AlumnsFullNamePipe implements PipeTransform {
  transform(value: Alumns, transform?: 'uppercase'): string {
    const result = value.firstName + ' ' + value.lastName;

    if (transform === 'uppercase') {
      return `${result}`.toUpperCase();
    }

    return result;
  }
}