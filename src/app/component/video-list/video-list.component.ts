import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoListService} from '../../service/video-list/video-list.service';
import {VideoList} from '../../model/video-list/video-list';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  categoryNumber : number;
  message : string;
  private videoList: VideoList[];

  constructor(private route:ActivatedRoute,
              private router:Router,
              private videoListService : VideoListService
  )
  {
    this.categoryNumber = route.snapshot.data['categoryNumber'];
  }

  async ngOnInit() {
    this.videoList = await this.videoListService.getVideoListByCategory(this.categoryNumber).toPromise();
    if (this.categoryNumber == 1) {
      this.message = 'Ben 1 numara LoL';
    } else if (this.categoryNumber == 2) {
      this.message = 'Ben 2 numara CSGO';
    }
  }

}
