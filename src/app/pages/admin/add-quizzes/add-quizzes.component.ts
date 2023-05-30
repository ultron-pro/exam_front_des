import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit  {
  
  color= 'accent';
  checked = false;
  disabled = false;
  categories:any = [];
  QuizzData ={
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    active: true,
    category:null,
  };
  constructor(private _cat:CategoryServiceService,private _snack:MatSnackBar,private _qize:QuizzeServicesService){}
  ngOnInit(): void {
   
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>
      {
         console.log(error);
         Swal.fire('error!!','Error in loading data server','error');
      }
    );
  }

  public addQuizz()
  {
    console.log(this.QuizzData.title)
    if(this.QuizzData.title.trim()==' '|| this.QuizzData.title==null )
    {
      console.log("title call")
      this._snack.open('title required !!',' ',{
         duration:3000,
      });
      return ;
    }
    //call server
    this._qize.addQuiz(this.QuizzData).subscribe(
      (data:any)=>
      {
        Swal.fire('success','Quizze add');
        this.QuizzData={
          title:'',
          description:'',
          maxMarks:'',
          numberofQuestions:'',
          active: true,
          category:null,
        }
      },
      (error)=>{
        Swal.fire('Error!!','Error while loaing','error');
      }
    );
  }  

}
