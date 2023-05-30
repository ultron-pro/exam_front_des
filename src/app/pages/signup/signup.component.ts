import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';      


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userServices:UserService,private snackBar:MatSnackBar)
  {

  }
 
  public user={
    username: '',
    password:'',
    firstName: '',
    lastName: '',
    email:'',
    phone:'',
    profile:'',
     

  };
  


  ngOnInit(): void{}

  formSubmit()
  {
    console.log(this.user);

    if(this.user.username== '' || this.user.username== null)
     {
    
         this.snackBar.open("user name required!!",'',{
          duration:3000,
          // verticalPosition:'top', 
          // horizontalPosition:'left',
         });



      return ;
     }


 
      //addUSer: Userservices
      
      this.userServices.addUser(this.user).subscribe(
        (data:any) =>{
          console.log(data);
          Swal.fire('success','user is register'+data.id,'success');
        }
        ,
        (error) =>{
          this.snackBar.open("something wrong!! database user already register try another",'',{
            duration:3000,
            // verticalPosition:'top', 
            // horizontalPosition:'left',
           });
          console.log(error);
          
        }
      );
    

  }

  // this.user 



}
