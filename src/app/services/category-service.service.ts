import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private baseUrl ='http://localhost:2020';
  constructor(private _http:HttpClient) { }


  public categories()
  {
    return this._http.get(this.baseUrl+`/category/`)
  }

  public addCategory(category:any)
  {
    return this._http.post(this.baseUrl+`/category/`,category);
  
  }
}
