import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() fc;
  @Input() idn = 'file';
  @Input() withInnerHTML = false;
  @Output() onSelect = new EventEmitter();
  selectedFile;

  selectFile(e) {
    this.selectedFile = e.target.files[0];
    this.fc.setValue(URL.createObjectURL(this.selectedFile));
  }

  resetVal(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fc.setValue('');
  }
}
