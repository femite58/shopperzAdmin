import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private infoService: InformationService) {}

  closeModal = new BehaviorSubject(false);
  submitting;

  categories = this.infoService.categories;
  form = new FormGroup({
    cat_name: new FormControl('', Validators.required),
    cat_img: new FormControl('', Validators.required),
  });

  f(n) {
    return this.form.get(n);
  }

  onClose() {}
  submit() {}
}
