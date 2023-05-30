import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  category=
    {
      title:'' ,
      description: '',
    };
  
  constructor(
    private _category:CategoryServiceService,
    private _snack:MatSnackBar
  ){}
  
  ngOnInit(): void {}

  public forSubmit()
  {
    if(this.category.title.trim()== ''|| this.category.title== null)
    {
      this._snack.open('title Required!!','',{
        duration:3000,
      })
      return

    }

    this._category.addCategory(this.category).subscribe
    ((data)=>{
      this.category.title='';
      this.category.description='';
      Swal.fire('success !!','Category is added successfuly','success');

    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','Server error!!','error');


    }
    
    );
  }


}
