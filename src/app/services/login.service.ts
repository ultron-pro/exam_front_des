import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserService } from './user.service';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  public loginStatusSubject = new Subject<boolean>();
  @Output() fireIsLoggIn:EventEmitter<any>= new EventEmitter<any>();
  
   private baseUrl ='http://localhost:2020';

  constructor(private http:HttpClient) { 

    }

  public getCurrentUser()
  {   
    console.log("call get currentuser.....")
    return this.http.get(this.baseUrl+'/current-user');
  }
  /// user display nabar
  


  //generat token
   
  public generateToken(LoginData: any)
  {
      return this.http.post(this.baseUrl+'/generate-token',LoginData);
     
  }
  

    //logiin user: set token  in localStorage
    public loginUser(token:any)
    {
            localStorage.setItem('token',token);
           localStorage.setItem('user',JSON.stringify('user'));
     
            this.loginStatusSubject.next(true);
           
     
           
            return true;
    }
    //get emitter 

     
    
    //islogin  user is logged in or not

     public isLoggedIn()
     {
       let tokenStr = localStorage.getItem("token");
       if(tokenStr == undefined || tokenStr == '' || tokenStr == null  )
       {
        
         return false;
       }
       else
       {
      
        return true;
       }
     }

     //logout : remove token  form local storage 

      public logout()
      {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return true;
      }

      // get token
      
      public getToken()
      {
        return localStorage.getItem('token');
      }
      //set user details
      public setUser(user:any)
      {
        
        localStorage.setItem("user",JSON.stringify(user));
      }
      // get user
      public getUser()
      {
        let userStr = localStorage.getItem("user");
        if(userStr != null)
        {
            
          return JSON.parse(userStr);

          // this.userservice.addUser(username,password,type).subscribe(data => {
          //   this.users.push(data);
          // });
        }
        else
        {
          this.logout();
          return null;
        }
       
      }

      //getUser role

      public getUserRole()
      {
        let user= this.getUser();
        return user.authorities[0].authority;

      }
      
    }
