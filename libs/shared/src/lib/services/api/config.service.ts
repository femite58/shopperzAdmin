import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  //   baseUrl = 'http://192.168.8.149:8800/api/';
  baseUrl = 'https://api.pavypay.com/api/';

  cardNoDecrypt(str) {
    let normalStr = '';
    for (let i = 12; i < str.length; i += 16) {
      if (i != 60) {
        normalStr += str.slice(i, i + 4);
      } else {
        let last = str.slice(i);
        normalStr += last.slice(-last.length, -12);
        break;
      }
    }
    let s = ['P', 'Y', 'G', 'M', 'D', 'Q', 'F', 'N', 'O', 'X'];
    let r = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    s.forEach((ea, i) => {
      normalStr = normalStr.replace(new RegExp(ea, 'g'), r[i]);
    });
    return normalStr;
  }

  cvvDecrypt(cvv) {
    let convStr = '';
    for (let i = 18; i < cvv.length; i += 19) {
      convStr += cvv.slice(i, i + 1);
    }
    let s = ['R', 'U', 'S', 'I', 'Z', 'T', 'C', 'V', 'W', 'E'];
    let r = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    s.forEach((ea, i) => {
      convStr = convStr.replace(new RegExp(ea, 'g'), r[i]);
    });
    return convStr;
  }

  randNo(len) {
    let retStr = '';
    for (let i = 0; i < len; i++) {
      retStr += `${Math.floor(Math.random() * 10)}`;
    }
    return retStr;
  }
}
