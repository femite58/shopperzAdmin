import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicId',
})
export class PublicIdPipe implements PipeTransform {
  transform(value): any {
    if (!value) return value;
    let pubId = value.match(/v\d+.+$/)[0].split('.')[0];
    return pubId;
  }
}
