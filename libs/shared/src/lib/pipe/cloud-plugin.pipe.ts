import { Pipe, PipeTransform } from '@angular/core';
import { lazyload, placeholder } from '@cloudinary/ng';

@Pipe({
  name: 'cloudPlugin',
})
export class CloudPluginPipe implements PipeTransform {
  transform(value): any {
    return [lazyload(), placeholder({ mode: 'blur' })];
  }
}
