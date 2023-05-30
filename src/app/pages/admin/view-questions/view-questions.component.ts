import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { QuestionServicesService } from 'src/app/services/question-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  
  
  qtitle='';
  question:any=[];
 
  quId:any;
  

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _quesser:QuestionServicesService,
    private _snack:MatSnackBar,
    ){
      
     
      
    }

  ngOnInit(): void {
    
   
      this._route.paramMap.subscribe((res:any)=>{
       // this.qId=res;
        let qId=res.get('id');
        this.quId=qId;
        this._quesser.getQuestionOfQuiz(qId).subscribe(
          (data:any)=>
          {
            console.log(data);
            this.question=data;
  
  
          },
          (error)=>
          {
             console.log(error);
          }
          );
      })    
    // this.qId =this._route.snapshot.params['qid']  ; 
     console.log(this.quId);
 
      this.qtitle=this._route.snapshot.params['title'];
      console.log(this.qtitle);
    
  }

   public deleteQuestion(quesId:any)
   {
     Swal.fire({
       icon:'info',
       showCancelButton: true,
       confirmButtonText: 'Delete',
       title:'Are you sure, want to delete this question'
     }).then((result)=>
     {
       if(result.isConfirmed)
       {
        this._quesser.deleteQuestion(quesId).subscribe(
          (data)=>{
             this._snack.open('Question Deleted','',{
               duration:3000,
             });
             this.question= this.question.filter((q:any)=>
               q.quesId !== this.quId)
               
               refreshValuesOnOpen: true
          },
          (error)=>
          {
            console.log(error);
            this._snack.open('Error deleting question!!','',{
             duration:3000,
            }
            );
          }
        );
       }
     });
   }  
}
