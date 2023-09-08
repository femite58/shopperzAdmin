import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  
  closeModal = new BehaviorSubject(false);
  submitting;

  categories= [
    {
      id: 1, name: 'Electronics',img_url:'assets/images/products/image_sm1.png', sub_cat: 'TV, Fridge, Iron, Phone', date_created: Date.now()
    },
    {
      id: 2, name: 'Home accessories',img_url:'assets/images/products/image_sm2.png', sub_cat: '-', date_created: Date.now()  
    },
    {
      id: 3, name: 'Gadgets',img_url:'assets/images/products/image_sm1.png', sub_cat: 'Bag, Keys, Glass', date_created: Date.now()  
    },
    {
      id: 4, name: 'Rado Watch',img_url:'assets/images/products/image_sm2.png', sub_cat: '', date_created: Date.now()  
    },
  ];
  form = new FormGroup({
    cat: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  onClose() {}
  submit() {}
}
