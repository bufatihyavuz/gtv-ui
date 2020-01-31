import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Video} from '../../model/video/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoUrl = AppConfig.localURL + 'videos/test';

  constructor(private http : HttpClient) { }

  public saveVideo(test : Video){
    return this.http.post(this.videoUrl,test);
  }
}
