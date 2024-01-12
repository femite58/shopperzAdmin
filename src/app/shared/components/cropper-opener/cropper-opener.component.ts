import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/data/services/file-upload.service';

@Component({
  selector: 'app-cropper-opener',
  templateUrl: './cropper-opener.component.html',
  styleUrls: ['./cropper-opener.component.scss'],
})
export class CropperOpenerComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  closeModal = new BehaviorSubject(false);
  imgCropperEvent;
  aspectRatio = 1;
  croppedImg;
  @ViewChild('cropModalOpener') cropModalOpener: ElementRef;
  @ViewChild('input') input: ElementRef;
  openSub: Subscription;

  constructor(private fileS: FileUploadService) {}

  ngOnDestroy(): void {
    this.openSub?.unsubscribe();
  }

  info;
  croppedFile;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openSub = this.fileS.cropInfo.subscribe((info) => {
      if (info) {
        this.aspectRatio = info.aspectRatio;
        this.info = info;
        this.input.nativeElement.click();
        this.fileS.cropInfo.next(null);
      }
    });
  }

  selImage(e) {
    this.imgCropperEvent = e;
    // this.file = e.files[0];
    this.cropModalOpener.nativeElement.click();
  }

  imageCropped(e: ImageCroppedEvent) {
    this.croppedFile = e.blob;
    this.croppedImg = e.objectUrl;
  }

  done() {
    this.info?.callback({
      file: this.imgCropperEvent.target.files[0],
      croppedFile: this.croppedFile,
      url: this.croppedImg,
    });
    this.input.nativeElement.value = null;
    this.closeModal.next(true);
  }
}
