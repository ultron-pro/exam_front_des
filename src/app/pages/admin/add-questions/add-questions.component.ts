import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServicesService } from 'src/app/services/question-services.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  
  public Editor = ClassicEditor;
  question:any=[];
  qId2:any;
  title:any;
  
  addquestion:any={
    quiz:{
    
    },
    quesId:'',
    answer:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
  };
  qId='';
    constructor(
      private _route:ActivatedRoute,
      private _questionQuz:QuestionServicesService
      
      ){
          
    }
  
  ngOnInit(): void {
   
    // this._route.paramMap.subscribe(
    //   (res:any)=>
    //   {
    //     let qtitle:any =res.get('qtitle');
    //      this.title=qtitle;
    //     //  this.addquestion=this.question;
    //     console.log(this.title);
    //    }

    // )
    
    
    // this.addquestion=this.question;
    this.qId=this._route.snapshot.params['qid'];
    this.addquestion.quiz['qid']=this.qId;
    
    console.log(this.qId);
    this.title=this._route.snapshot.params['qtitle'];
    console.log(this.title);
  }
    public formSubmit()
    {
    if(this.addquestion.content.trim()== '' || this.addquestion.content== null)
    {
      
      return;
    }
    if(this.addquestion.option1.trim()== '' || this.addquestion.option1== null)
    {
      
      return;
    }
    if(this.addquestion.option2.trim()== '' || this.addquestion.option2== null)
    {
      
      return;
    }
    if(this.addquestion.option3.trim()== '' || this.addquestion.option3== null)
    {
      
      return;
    }
    if(this.addquestion.option4.trim()== '' || this.addquestion.option4== null)
    {
      
      return;
    }
    //form submit
    this._questionQuz.addQuestion(this.addquestion).subscribe
    (
      (data:any)=>
      {
        console.log(this.addquestion);
        Swal.fire('success','question add another question','success');
       
        this.addquestion.content='';
        this.addquestion.option1='';
        this.addquestion.option2='';
        this.addquestion.option3='';
        this.addquestion.option4='';
        this.addquestion.answer='';
       

      },
      (error)=>
      {
        console.log(this.addquestion);
        console.log(error);
        Swal.fire('error','error in adding question','error');
      }
    )
    }
}
