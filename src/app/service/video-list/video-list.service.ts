import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../app-config';
import {VideoList} from '../../model/video-list/video-list';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  videoList = AppConfig.localURL + 'videos/';

  constructor(private http: HttpClient) { }

  getVideoListByCategory(categoryId : number){
      return this.http.get<VideoList[]>(this.videoList + categoryId);
  }
}
