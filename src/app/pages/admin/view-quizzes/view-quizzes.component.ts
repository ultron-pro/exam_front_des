import { Component,OnInit } from '@angular/core';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements  OnInit{
  color= 'accent';
  checked = false;
  disabled = false;
 
  quizzes:any=[];
    
  
  constructor(private _quizes:QuizzeServicesService){

  }
 
  ngOnInit(): void {
    this._quizes.quizzes().subscribe(
      (data:any)=>{
        this.quizzes =data;
        console.log(this.quizzes);
      },
      (error)=>
      {
        console.log(error);
        Swal.fire('error !!','Error loading data !','error');
      }
    );
    }

    deleteQuiz(qId:any)
    {
     

         Swal.fire(
          {
            icon: 'info',
            title: 'are you sure ?',
            confirmButtonText:'Delete',
            showCancelButton: true,
          }
         ).then((result)=>
         {
            
         this._quizes.deleteQuizes(qId).subscribe(
        (data:any)=>
        {
         Swal.fire('success','Quizes delete','success');
        },
        (error)=>
        {
          console.log(error);
          Swal.fire('error','Quizes delete error','error');
        }
      );

         }
         );
    }
}
