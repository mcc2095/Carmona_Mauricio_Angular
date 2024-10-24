import { Pipe, PipeTransform } from '@angular/core';
import { Alumn } from '../../dashboard/alumns/models/model';

@Pipe({
  name: 'alumnsFullName',
})
export class AlumnsFullNamePipe implements PipeTransform {
  transform(value: Alumn, transform?: 'uppercase'): string {
    const result = value.firstName + ' ' + value.lastName;

    if (transform === 'uppercase') {
      return `${result}`.toUpperCase();
    }

    return result;
  }
}