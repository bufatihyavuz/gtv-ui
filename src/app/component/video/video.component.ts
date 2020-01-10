import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() id:number;
  @Input() title:string;
  @Input() url:string;
  @Input() view:number;
  @Input() duration:number;
  @Input() size:number;
  @Input() createDate:Date;

  id2:number;
  title2:string;
  url2:string;
  view2:number;
  duration2:number;
  size2:number;
  createDate2:Date;

  constructor() { }

  ngOnInit() {
    this.id2 = this.id;
    this.title2 = this.title;
    this.url2 = this.url;
    this.view2 = this.view;
    this.duration2 = this.duration;
    this.size2 = this.size;
    this.createDate2 = this.createDate;
  }

}
