import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ='http://localhost:2020';
     
  constructor(private http:HttpClient ) { }
   
  //add user

  public addUser(user:any): Observable<Object>{
    
     return  this.http.post(this.baseUrl+'/user/',user);
    
  }


}

