import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  LoginData = {
    username:'',
    password:'',
  };



  constructor(private snack:MatSnackBar,private login:LoginService,private routers:Router){}

  ngOnInit(): void {
      
  }
  forSubmit(){
    console.log("login form");
    if(this.LoginData.username.trim() == '' || this.LoginData.username == null)
    {
      this.snack.open("user name is requried !!",'',{
        duration:3000,
      });


        return;
    }
    if(this.LoginData.password.trim() == '' || this.LoginData.password == null)
    {
      this.snack.open("type correct password is requried !!",'',{
        duration:3000,
      });


        return;
    }    

    
    this.login.generateToken(this.LoginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
         (user:any) =>{
            this.login.setUser(user);
            console.log(user);

            //redirect ...admin: admin-dashboard

            if(this.login.getUserRole() =='ADMIN')
            {
              //admin dashboard 
              console.log("call admin...")
               window.location.href='/admin'
             
              //this.routers.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
              console.log("end admin");
             

            }
             else if(this.login.getUserRole() == 'Normal')
            {
              //user dashboard
              console.log("call user...")
              //  window.location.href='/user-dashboard/0';
              
              this.routers.navigate(['user-dashboard/0']) ;
              this.login.loginStatusSubject.next(true);
             
            }
            else
            {
              console.log("call logout...")
              this.login.logout();
            }
            //redirect....Normal: normal-dashboard

         }
          
        );
      }
      ,
       (error) =>{
        console.log('Error !');
        console.log(error)
        this.snack.open("Invalid Details user name and password..!! Try agains",'',
        {
          duration:3000,
        });
       }  
    );

  }
}
