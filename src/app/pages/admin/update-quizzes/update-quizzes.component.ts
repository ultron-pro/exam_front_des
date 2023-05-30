import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.css']
})
export class UpdateQuizzesComponent implements OnInit  {
  color= 'accent';
  checked = false;
  disabled = false;

  qId=0;
  quiz:any='';
  categories:any='';
  constructor(
    private _route:ActivatedRoute,
    private _Quiz:QuizzeServicesService,
    private _cat:CategoryServiceService,
    private _router:Router
    ){}


  ngOnInit(): void {
     this.qId=this._route.snapshot.params['qid'];

     this._Quiz.getQuize(this.qId).subscribe(
      (data:any)=>{

         this.quiz =data;
         console.log(data);
         
      },
      (error)=>
      {
      console.log(error);
      }
     );

     this._cat.categories().subscribe(
      (data:any)=>
      {
        this.categories=data;
       
      },
      (error)=>
      {
        alert('error loading categories')
      }
     )

  }
   // update form submit

   public updateSubmit()
   {
     this._Quiz.updateQuizze(this.quiz).subscribe(
      (data)=>{
           Swal.fire('update !!','quizes updated','success').then((e)=>
           {
            this._router.navigate(['/admin/quizzes']);

           });
      },
      (error)=>
      {
        Swal.fire('Error','error in updated','error');
      }
     )
   }
  
    
}
