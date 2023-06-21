import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cleanUrl',
})
export class CleanUrlPipe implements PipeTransform {
    transform(value): any {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z\d]+/g, '-');
    }
}
