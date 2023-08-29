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
  count = 5;
  limit = 3;
  page = 1;
  currentStat;
  deactivate;
  selectedStore: any;
  storesData = [
    {
      id: '1',
      name: 'Shopperz - Ikeja',
      address: '89 shitta street, dopemu round',
      state: 'Lagos',
      manager_name: 'Micheal',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '2',
      name: 'Bitstore - Surulere',
      address: '12 Janyy street, downing road',
      state: 'Ogun',
      manager_name: 'Jude',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Inactive',
    },
    {
      id: '3',
      name: 'Generanshop - Festac',
      address: '70 Bowman St. South Windsor',
      state: 'Rivers',
      manager_name: 'Stephen',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '4',
      name: 'Viaanmarket -  Sango',
      address: '4 Shirley Ave. West Chicago',
      state: 'Abia',
      manager_name: 'Dayo S',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '5',
      name: 'ZBuy - Alimosho',
      address: '123 6th St. Melbourne, FL 3',
      state: 'Kano',
      manager_name: 'Adeleke',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '6',
      name: 'Zcross - Lekki',
      address: '170 Wowman St. South Win',
      state: 'Abuja',
      manager_name: 'Mathew',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Inactive',
    },
  ];
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
  onClose() {}
  openDeactivateModal(store: any) {
    this.selectedStore = store;
  }

  confirmAction() {
    if (this.selectedStore) {
      if (this.selectedStore.status === 'Inactive') {
        this.selectedStore.status = 'Active';
      } else if (this.selectedStore.status === 'Active') {
        this.selectedStore.status = 'Inactive'; 
      }
    }

    this.selectedStore = null; 

    this.closeModal.next(true); 
  }

  onSetPage(page) {
    this.page = page;
  }
}
