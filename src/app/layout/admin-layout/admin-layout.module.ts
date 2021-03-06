import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import {VideoListComponent} from '../../component/video-list/video-list.component';
import { VideoComponent } from '../../component/video/video.component';
import {VideoFormComponent} from '../../component/video-form/video-form.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    VideoListComponent,
    VideoComponent,
    VideoFormComponent
  ]
})

export class AdminLayoutModule {}
