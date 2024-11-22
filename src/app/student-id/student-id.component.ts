import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.less']
})
export class StudentIdComponent {
   studentId:any = [];
   

   constructor(private _studentIDService:StudentIdService){

    _studentIDService.getStudentId().subscribe(
      (data: any) => {
      this.studentId = data;
      },
      (err: any) => {
        alert("Internal error")
      }
    )

   }
   term:string ="";
   filter(){
     this._studentIDService.getFilteredStudentId(this.term).subscribe(
       (data: any) => {
         this.studentId = data;
       },
       (err: any) => {
         alert("Internal error")
       }
     )
   }

column:string =""
order:string =""

sort(){
  this._studentIDService.getSortedStudentId(this.column, this.order).subscribe(
    (data: any) => {
      this.studentId = data;
    },
    (err: any) => {
      alert("Internal error")
    }
  )
}

limit:number =0;
page:number =0;
pagination(){
  this._studentIDService.getPagedStudentId(this.limit, this.page).subscribe(
    (data: any) => {
      this.studentId = data;
      location.reload();
    },
    (err: any) => {
      alert("Internal error")
    }
  )
}

delete(id:string){
  if(confirm("Are you sure you want to delete this student ID?")){
    this._studentIDService.deleteStudentId(id).subscribe(
      (data: any) => {
        alert("Student ID deleted successfully");
      },
      (err: any) => {
        alert("Internal error")
      }
    )
  }
}
}
