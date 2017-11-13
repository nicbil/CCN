import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objNgFor'
})
export class ObjNgForPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => Object.assign({ key }, value[key]));
  }
}