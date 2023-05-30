import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzeServicesService } from 'src/app/services/quizze-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  
  qid:any;
  quize:any;
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizzeServicesService,
    private _router:Router
    ){

  }
  ngOnInit(): void {
    
    this.qid= this._route.snapshot.params['qid'];
    console.log(this.qid);

    this._quiz.getQuize(this.qid).subscribe(
      (data:any)=>
      {
        this.quize=data;
        console.log(data);

      },
      (error)=>
      {
        console.log(error);
        alert("error loading data.....");
      }
    )
  }
  public startQuiz()
  {
    Swal.fire({
      title: 'Do you want to start exam?',
      
      icon:'info',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't start`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         this._router.navigate(['/start-exam/'+this.qid]);
        Swal.fire('Start!', '', 'success')
      } 
      else if (result.isDenied) 
      {
        this._router.navigate(['user-dashboard/instruction/'+this.qid]);
        Swal.fire('Please try again', '', 'info')
      }
    })
  }

}
