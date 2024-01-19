import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static futureCheck(control: AbstractControl): ValidationErrors | null {
    return Date.parse(control.value) >= Date.now() ? { future: true } : null;
  }
}
