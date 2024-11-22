import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.less']
})
export class StudentIdComponent {
   studentId:any = [];
   term:string ="";

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
}
