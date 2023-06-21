import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from 'src/app/data/localData/country.service';

@Pipe({
  name: 'phoneCode'
})
export class PhoneCodePipe implements PipeTransform {
    constructor(
        private ctryS: CountryService,
    ) {}

  transform(value: any): any {
    if (!value) return null;
    let match = this.ctryS.countriesStates.find(c => c.name == value);
    return match.dial_code;
  }

}
