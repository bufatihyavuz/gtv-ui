import { Routes } from '@angular/router';

import {VideoListComponent} from '../../component/video-list/video-list.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'lol',  data:{categoryNumber: '1'},   component: VideoListComponent },
    { path: 'csgo', data:{categoryNumber: '2'},   component: VideoListComponent },
];
