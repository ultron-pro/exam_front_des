import { Component,OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categaroies',
  templateUrl: './view-categaroies.component.html',
  styleUrls: ['./view-categaroies.component.css']
})
export class ViewCategaroiesComponent implements OnInit {
  
    categoires:any =[];
      
    
     constructor(private _categories:CategoryServiceService){}
  ngOnInit(): void {
     
    this._categories.categories().subscribe(
      (data:any)=>
      {
         this.categoires=data;
         console.log(data.categaroies);
      },
       (error =>{
          console.log(error)
          Swal.fire("error !!","error in loading data",'error');
       })
      );
  }

   
}
