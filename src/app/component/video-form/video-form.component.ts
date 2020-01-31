import { Component, OnInit } from '@angular/core';
import {VideoFormService} from '../../service/video-form/video-form.service';
import {IdName} from '../../model/IdName';
import {VideoService} from '../../service/video/video.service';
import {Video} from '../../model/video/video';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent implements OnInit {

  private categoryList : IdName[];
  private heroList : IdName[];
  private video : Video;

  constructor(
      private videoFormService : VideoFormService,
      private videoService : VideoService
  ) { }

  async ngOnInit() {
    this.categoryList = await this.videoFormService.getAllCategories().toPromise();
    this.heroList = await this.videoFormService.getAllHeroes().toPromise();
  }

  submit(form) {
    this.video = new Video();
    this.video.url = form.url;
    this.video.category = +form.category;
    this.videoService.saveVideo(this.video).toPromise();
  }
}
