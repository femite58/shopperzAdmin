import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl;
  constructor(private http: HttpClient, config: ConfigService) {
    this.baseUrl = config.baseUrl;
  }
  cropInfo = new BehaviorSubject<{ aspectRatio: number; callback }>(null);

  upload(fd, folder, name) {
    let url = `${this.baseUrl}fileupload/${folder}/${name}`;
    if (fd.get('file').name.match(/(.pdf|.mp4|.jpg|.png|.jpeg|.zip)$/)) {
      url = `https://api.cloudinary.com/v1_1/bluescrow/image/upload`;
      fd.append('api_key', '294546853684684');
      fd.append('upload_preset', 'zbxotydn');
    }
    return this.http.post<any>(url, fd, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
