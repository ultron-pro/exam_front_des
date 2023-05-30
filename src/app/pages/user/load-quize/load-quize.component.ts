import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question-services.service';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';

@Component({
  selector: 'app-load-quize',
  templateUrl: './load-quize.component.html',
  styleUrls: ['./load-quize.component.css']
})
export class LoadQuizeComponent implements OnInit {
  catId:any='';
  quizes:any='';
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizzeServicesService
  ){

  }
  
  ngOnInit(): void {
    this.catId=this._route.snapshot.params['catId'];
     

      this._route.params.subscribe(
        (param)=>{
          this.catId=param['catId'];
          if(this.catId==0)
         {
      console.log("load all the quize");

      this._quiz.getActiveQuizzes().subscribe(
        (data:any)=>
        {
            this.quizes=data;
            console.log(this.quizes);
        },
        (error)=>
        {
          console.log(error);
          alert("error in loading all qizzess");
        }
      )
      
    }
    else{
      console.log("load specfiy quize");
       
      this._quiz.getActiveQuizebyCategory(this.catId).subscribe(
        (data:any)=>
        {
          this.quizes=data;
        },
        (error)=>
        {
          alert("error loading")
          console.log(error);
        }
      );
    }

        }
      )

  }

}
