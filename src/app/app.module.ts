import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './layout/navbar/navbar.module';
import { SidebarModule } from './layout/sidebar/sidebar.module';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { VideoModalComponent } from './component/video-modal/video-modal.component';
import { VideoFormComponent } from './component/video-form/video-form.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    VideoModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [VideoModalComponent]
})
export class AppModule { }
