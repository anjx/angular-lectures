import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'please'
})
export class PleasePipe implements PipeTransform {

  transform(value: string): string {
    return `Please ${value}`;
  }

}
