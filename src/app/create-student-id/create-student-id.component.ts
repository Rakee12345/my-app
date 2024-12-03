import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student-id',
  templateUrl: './create-student-id.component.html',
  styleUrls: ['./create-student-id.component.less'],
})
export class CreateStudentIdComponent {

  id:string="";

  constructor(private _studentService: StudentIdService,
    private _activatedRoute: ActivatedRoute){
      _activatedRoute.params.subscribe(
        (data:any) => {
          console.log(data);
          // api call
          _studentService.viewStudentId(data.id).subscribe(
            (data:any) => {
              this.id = data.id;
              this.studentIdForm.patchValue(data);
            }
          )
        }
      )
    }
  
    

  public studentIdForm: FormGroup = new FormGroup({
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
  });
submit() {
    if(this.id){
      this._studentService.updateStudentId(this.id, this.studentIdForm.value).subscribe(
        (data: any) => {
          alert('Student ID updated successfully');
        },
        (err: any) => {
          alert('Upadation Failed');
        }
      )
    }
    else{
      this._studentService.createStudentId(this.studentIdForm.value).subscribe(
        (data: any) => {
          alert('Student ID created successfully');
          location.reload();
        },
        (err: any) => {
          alert('creation failed');
        }
      )
  
    }
    }
}
