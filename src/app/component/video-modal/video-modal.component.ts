import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {

  @Input() videoId : string;
  @Input() title : string;
  trustedDashboardUrl: SafeUrl;
  urlString :string;
  iframeURL :SafeUrl;

  constructor(
      public myModalRef : BsModalRef,
      private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.urlString = "https://www.youtube.com/embed/"+this.videoId+"?rel=0&autoplay=1&modestbranding=1&showinfo=0 ";
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString);
    this.iframeURL = this.trustedDashboardUrl;
  }

}
