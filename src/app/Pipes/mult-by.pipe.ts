import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult',
  pure: false,
})

export class MultByPipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
     return num * pow;
  }

}
