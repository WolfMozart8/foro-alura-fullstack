import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noUnderscore'
})
export class NoUnderscorePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace("_", " ");
  }

}
