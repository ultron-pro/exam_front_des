import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { elementAt } from 'rxjs';
import { QuestionServicesService } from 'src/app/services/question-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result-exam',
  templateUrl: './result-exam.component.html',
  styleUrls: ['./result-exam.component.css']
})
export class ResultExamComponent implements  OnInit {
  questions:any; 
  
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  isSubmit=false;
  qid:any;
  constructor(
    private locst:LocationStrategy,
    private _question:QuestionServicesService,
   private _route:ActivatedRoute,
   
  )
  {
    
  }
  ngOnInit(): void {
     this.preventBackButton();
     this._route.params.subscribe(
      (param:Params)=>
      {
         this.marksGot=param['marksGot'];
         this.correctAnswers=param['correctAnswers'];
         this.attempted=param['attempted'];
        
        
      }
     );
    
     console.log(this.marksGot);
     console.log(this.correctAnswers);
     console.log(this.attempted);
  }

  preventBackButton()
  {
    history.pushState(null,'',window.location.href);

    this.locst.onPopState(
     ()=>
     {
       history.pushState(null,'',window.location.href);
       
     });
  }
 
  printPage()
  {
    window.print();
  }  
  getResult()
  {
    
   
  }

}
