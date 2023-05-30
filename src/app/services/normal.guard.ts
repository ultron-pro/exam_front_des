import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})


export class NormalGuard implements CanActivate {

  constructor(private login:LoginService,private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
       if(this.login.isLoggedIn() && this.login.getUserRole() == 'Normal')
       {

        return true;
       }
        
       this.route.navigate(['login']);
      return false;
 
 
  }
  
}
