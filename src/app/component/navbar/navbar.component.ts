import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   
  
  
  isLoggedIn = false;
   user =null;
   
   

   constructor(public login:LoginService){

       this.user=this.login.getUser();
       console.log("call constr");

      
   }
  
 
  ngOnInit(): void {
  console.log(this.login.isLoggedIn());  
   this.isLoggedIn = this.login.isLoggedIn();
   this.user=this.login.getUser().username;
   
  //  var userDetails = localStorage.getItem('user');
   
   
    this.login.loginStatusSubject.asObservable().subscribe(
      (data)=>{
        console.log("data:-"+data);
        console.log("data:-"+this.isLoggedIn);
        this.isLoggedIn = this.login.isLoggedIn();
        
        this.user=this.login.getUser().username;
       
         console.log("call loginStatus"+this.user)
               
      }
     
    );
    
    

  }
  public logout()
  {
    console.log("click button");
    this.login.logout();
    //  this.isLoggedIn = false;
    //  this.user = null;
    window.location.reload();
  }

}
