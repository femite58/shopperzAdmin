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
import { CountryService } from 'libs/shared/src/lib/services/localData/country.service';
import { ConfirmActionService } from 'libs/shared/src/lib/services/api/confirm-action.service';
import { InformationService } from 'libs/shared/src/lib/services/api/information.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit, AfterViewInit {
  closeModal = new BehaviorSubject(false);
  stores = [];
  count = 5;
  limit = 3;
  page = 1;
  currentStat;
  deactivate;
  selectedStore: any;
  storesData = this.infoService.storesData;
  filteredVal = new FormControl('All');
  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Active', value: 'Active' },
    { txt: 'Inactive', value: 'Inactive' },
  ];
  @ViewChild('addStoreModalOpener') addStoreModalOpener: ElementRef;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    lga: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  get objectFiltered() {
    return this.storesData.filter((item) => {
      if (this.filteredVal.value === 'All') return true;
      return this.filteredVal.value === item.status;
    });
  }

  submitting = false;

  f(n) {
    return this.form.get(n);
  }

  states = [];

  stateOpts = [];
  get lgaOpts() {
    return this.f('state').value
      ? this.states
          .find((s) => s.state === this.f('state').value)
          .lgas.map((l) => ({ txt: l, value: l }))
      : [];
  }

  constructor(
    private route: ActivatedRoute,
    private locS: CountryService,
    private confS: ConfirmActionService,
    private infoService: InformationService
  ) {}

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
  onClose() {}
  openDeactivateModal(store: any) {
    this.selectedStore = store;
  }

  onSetPage(page) {
    this.page = page;
  }
  confirmModOpen(store) {
    this.selectedStore = store;
    this.confS.actionObj.next({
      title: store.status == 'Active' ? 'Deactivate Store' : 'Activate Store',
      body: `Are you sure you want to ${
        store.status == 'Active' ? 'deactivate' : 'activate'
      } store?`,
      confirm: () => {
        if (this.selectedStore) {
          if (this.selectedStore.status === 'Inactive') {
            this.selectedStore.status = 'Active';
          } else if (this.selectedStore.status === 'Active') {
            this.selectedStore.status = 'Inactive';
          }
        }

        this.selectedStore = null;

        this.closeModal.next(true);
      },
      confirmTxt: 'Confirm',
    });
  }
}
