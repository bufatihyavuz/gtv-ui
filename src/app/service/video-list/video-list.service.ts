import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../app-config';
import {Video} from '../../model/video/video';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  videoList = AppConfig.localURL + 'videos';

  constructor(private http: HttpClient) { }

  getVideoListByCategory(categoryId : number){
      return this.http.get<Video[]>(this.videoList + "/" +categoryId);
  }
}
