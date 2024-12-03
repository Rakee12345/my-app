import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.less']
})
export class StudentDetailsComponent {

  student:any ={};

  constructor(private _activatedRoute: ActivatedRoute,_studentDetailsService: StudentIdService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        // api call
        _studentDetailsService.viewStudentId(data.id).subscribe(
          (data:any) => {
            this.student = data;
          },
          
        )

      }
    )
  }
}


