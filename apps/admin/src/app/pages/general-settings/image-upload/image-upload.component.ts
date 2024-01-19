import { Component, Input } from '@angular/core';
import { FileUploadService } from 'libs/shared/src/lib/services/api/file-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Input() fc;
  @Input() sizeDesc;
  @Input() uid;
  @Input() minW;
  @Input() minH;
  file;

  constructor(private fileS: FileUploadService) {}

  selectImg() {
    // this.file = e.target.files[0];
    // this.fc.setValue(URL.createObjectURL(this.file));
    this.fileS.cropInfo.next({
      aspectRatio: this.minW / this.minH,
      callback: (info) => {
        this.fc.setValue(info.url);
      },
    });
  }
}
