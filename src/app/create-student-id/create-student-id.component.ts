import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student-id',
  templateUrl: './create-student-id.component.html',
  styleUrls: ['./create-student-id.component.less']
})
export class CreateStudentIdComponent {

  constructor(private _studentService: StudentIdService){}

  public studentIdForm:FormGroup = new FormGroup(
    {
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
  },

    )

    submit(){
      console.log(this.studentIdForm);
      this._studentService.createStudentId(this.studentIdForm.value).subscribe(
        (data:any) => {
          alert("Student ID created successfully");
          location.reload();
        },
      
        (err:any) => {
          alert("Internal server error");
        }
      )
  }

}
