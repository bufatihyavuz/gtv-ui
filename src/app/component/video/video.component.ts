import {Component, Injector, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {VideoModalComponent} from '../video-modal/video-modal.component';
import {ModalConfig} from '../../util/modal-config';

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

  modalRef: BsModalRef;
  modalService: BsModalService;

  constructor(
      private injector: Injector
  ) {
    this.modalService = injector.get(BsModalService);
  }

  ngOnInit() {
    this.id2 = this.id;
    this.title2 = this.title;
    this.url2 = this.url;
    this.view2 = this.view;
    this.duration2 = this.duration;
    this.size2 = this.size;
    this.createDate2 = this.createDate;
  }

    showModal(urlParam: string, title: string ) {
      const initialState =  {
        videoId : urlParam,
        title : title,
      };
      this.modalRef = this.modalService.show(VideoModalComponent,ModalConfig.specialgetConfig(initialState,true,true,false));
    }
}
