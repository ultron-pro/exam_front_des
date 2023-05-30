import { LocationStrategy } from '@angular/common';
import { Component,OnInit ,OnDestroy} from '@angular/core';
import { fromEvent, map } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question-services.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';



@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent  implements OnInit{
  private baseUrl ='http://localhost:2020';
   
  
   questions:any;
   qid:any;
  
   marksGot=0;
   correctAnswers=0;
   attempted=0;
   isSubmit=false;
   timer:any;

  constructor(
    private locst:LocationStrategy,
    private _quiz:QuizzeServicesService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _question:QuestionServicesService
  ){}
 
  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params['qid'];
    console.log(this.qid);
    this.loadQuestions();
    
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
  
   // geting questions
  loadQuestions()
   {
    this._question.getQuestionOfQuizForTest(this.qid).subscribe
    (
      (data:any)=>{
        this.questions=data;
        this.timer = this.questions.length * 2 * 60;
        console.log(this.timer);
        this.questions.forEach((q:any) => {
          q['givenAnswer']= '';
        });
        console.log(this.questions);
        this.startTimer();

      },
      (error)=>
      {
        console.log(error);
        Swal.fire("Error","Error loading questions",'error');
      }
    )
  }
   submitQuiz()
   {
     Swal.fire(
      {
        title: 'Do you want to submit the quize?',
      
      icon:'info',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      }
    ).then(
      (s)=>{
        if(s.isConfirmed)
        {
           this.evalQuizes();

        }
      }
    );
    
  }  
  
  startTimer()
  { 
    let t =window.setInterval(()=>{
       if(this.timer<=0)
       {
        this.evalQuizes();
        clearInterval(t);
       }
       else
       {
        this.timer--;
       }
    },1000);
    
  }
  getFormattedTime()
  {
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm * 60;
    return [mm,ss];
  }
  evalQuizes()
  {
    this.isSubmit = true;
    this._question.evalQuestion(this.questions).subscribe
    (
      (data:any)=>
      {
          console.log(data);
          this.marksGot=data.marksGot;
          this.attempted=data.attempted;
          this.correctAnswers=data.correctAnswers;
         
           
          
          this._router.navigate(['/result-exam/'+this.marksGot+'/'+this.correctAnswers+'/'+this.attempted]);
          this.isSubmit=true;
        
      },
      (error)=>
      {
        console.log(error);

      }
    );
     
    // this.questions.forEach(
    //   (a:any)=>
    //   {
    //     console.log(a.answer)
    //       if(a.givenAnswer===a.answer)
    //       {
    //         this.correctAnswers++;
    //         let marksSingle = this.questions[0].quiz.maxMarks/this.questions.length;
    //         this.marksGot += marksSingle;

    //       }
    //       if(a.givenAnswer.trim()!= '')
    //       {
    //         this.attempted++;
    //       }
    //   }) ;
      
       

    //   console.log("correct Answers:-"+this.correctAnswers);
    //   console.log("Marks Got:-"+this.marksGot);
    //   console.log("attempted:-"+this.attempted);
  }
  printPage()
  {
    window.print();
  } 

}
