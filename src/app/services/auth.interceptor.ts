import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

// const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  
  constructor(private login:LoginService) {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler): 
    Observable<HttpEvent<any>> 
    {
      let authReq = request;
      //add the JWT token (localStorage) request
      
      const token = this.login.getToken();
      console.log("inside interceptor");
      console.log(token);
      if(token != null)
      {
         authReq = request.clone(
          { 
            setHeaders: {Authorization: `Bearer ${token}`
             
        } });

      }
      else
      {
        console.log("error created check it")
        authReq = authReq.clone({
          setHeaders:{
           
            Accept: 'application/json'
          }
        });
      }

     console.log("this is header:-"+authReq.headers);
    return next.handle(authReq);
  }
}

export const AuthInterceptorProviders =[
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

  },

];

