import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    categoryNumber : string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/lol', title: 'League of Legends',  icon:'pe-7s-user',categoryNumber:'1', class: ''},
    { path: '/csgo', title: 'Counter Strike GO',  icon:'pe-7s-note2',categoryNumber:'2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
