import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
  customerData = [
    {id: '1', firstname: 'Hawawu', lastname: 'Shittu', email: 'ishaqhawawu66@gmail.com', created_at: Date.now(), phone: '07066091112' , rank: 'Loyalty', order_count: 523, status: 'Active'},
    {id: '2', firstname: '-', lastname: '', email: 'tijanialiy@gmail.com', created_at: Date.now(), phone: '-' , rank: '-', order_count: '-', status: 'Inactive'},
    {id: '3', firstname: 'Aliu', lastname: 'Tijani', email: 'rasmusjoeelm@gmail.com', created_at: Date.now(), phone: '08095577527' , rank: 'Loyalty', order_count: 205, status: 'Active'},
    {id: '4', firstname: 'Henry', lastname: 'Essien', email: 'henryvictor161@gmail.com', created_at: Date.now(), phone: '+2348060240322' , rank: 'Loyalty', order_count: 112, status: 'Active'},
    {id: '5', firstname: 'Benneth', lastname: 'Akintolure', email: 'bennettanderson8@gmail.com', created_at: Date.now(), phone: '07063012438' , rank: 'Loyalty', order_count: '-', status: 'Inactive'},
  ]
  filter(opt) {
    this.customerData.filter(opt)
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
  });
  submitting = false;

  options = [
    {txt: 'Loyalty member', value: 'Loyalty member'}
  ];
  selectedValue: string = 'All' //Default
  filterOpts = [
    {txt: 'All', value: "All"},
    {txt: 'Active', value: "Active"},
    {txt: 'Inactive', value: "Inactive"},
 
  ]
  filteredData = []
  f(n) {
    return this.form.get(n);
  }
  submit() {
    this.closeModal.next(true)
  }
  closeModal = new BehaviorSubject(false);

  ngOnInit():void {
    this.applyFilter();
  }
  applyFilter() {
    if (this.selectedValue === 'All') {
      this.filteredData = this.customerData;
    }else {
      this.filteredData = this.customerData.filter(item => {
        return item.status === this.selectedValue
      })
    }
  }
}
