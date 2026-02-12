import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase1'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value)
    if(typeof value!=='string') return value;

    return value.toUpperCase();
  }

}
