import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CountryService } from 'src/app/data/localData/country.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit, AfterViewInit {
  closeModal = new BehaviorSubject(false);
  stores = [];
  @ViewChild('addStoreModalOpener') addStoreModalOpener: ElementRef;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    lga: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  submitting = false;

  f(n) {
    return this.form.get(n);
  }

  states = [];

  stateOpts = [];
  get lgaOpts() {
    return this.f('state').value
      ? this.states
          .find((s) => s.state == this.f('state').value)
          .lgas.map((l) => ({ txt: l, value: l }))
      : [];
  }

  constructor(private route: ActivatedRoute, private locS: CountryService) {}

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((param) => {
      if (param.action) {
        this.addStoreModalOpener.nativeElement.click();
      }
    });
  }

  trackLga(i, o) {
    return JSON.stringify(o);
  }

  ngOnInit(): void {
    this.states = this.locS.statesLga;
    this.stateOpts = this.states.map((s) => ({ txt: s.state, value: s.state }));
  }

  submit() {}
}
