import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
import { BanksService } from 'src/app/data/localData/banks.service';
import { GeneralSettingsService } from 'src/app/data/services/general-settings.service';

@Pipe({
    name: 'bank',
})
export class BankPipe implements PipeTransform {
    constructor(private genS: GeneralSettingsService) {}

    transform(code: any, o = 'logo'): any {
        if (!code) return code;
        return this.genS.settings.pipe(
            map((res) => {
                if (res) {
                    const banks = res.bankList;
                    return (
                        banks.find((b) => b.code == code)[o] ||
                        'assets/images/default-bank.png'
                    );
                }
                return null;
            })
        );
    }
}
