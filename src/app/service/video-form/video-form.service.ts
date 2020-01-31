import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {HttpClient} from '@angular/common/http';
import {IdName} from '../../model/IdName';

@Injectable({
  providedIn: 'root'
})
export class VideoFormService {
  categoryList = AppConfig.localURL + 'categories';
  heroList = AppConfig.localURL + 'categories/test';


  constructor(private http : HttpClient) { }

  public getAllCategories(){
     return this.http.get<IdName[]>(this.categoryList);
  }

  public getAllHeroes(){
     return this.http.get<IdName[]>(this.heroList);
  }


}
