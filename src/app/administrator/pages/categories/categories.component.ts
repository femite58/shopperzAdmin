import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  
  categories: [
    {
      id: 1, name: 'Electronics',img_url:'assets/image_sm1.png', sub_cat: 'TV, Fridge, Iron, Phone', date_created: Date  
    },
    {
      id: 2, name: 'Home accessories',img_url:'assets/image_sm2.png', sub_cat: '-', date_created: Date  
    },
    {
      id: 3, name: 'Gadgets',img_url:'assets/image_sm1.png', sub_cat: 'Bag, Keys, Glass', date_created: Date  
    },
    {
      id: 4, name: 'Rado Watch',img_url:'assets/image_sm2.png', sub_cat: '', date_created: Date  
    },
  ];

  
}
