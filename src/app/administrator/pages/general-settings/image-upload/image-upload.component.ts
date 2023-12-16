import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Input() fc;
  @Input() sizeDesc;
  @Input() uid;
  file;

  selectImg(e) {
    this.file = e.target.files[0];
    this.fc.setValue(URL.createObjectURL(this.file));
  }
}
