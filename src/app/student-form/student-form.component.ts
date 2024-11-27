import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.less']
})
export class StudentFormComponent {
public studentForm: FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    class:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    fathername:new FormControl('',[Validators.required, Validators.minLength(10)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    dob:new FormControl('',[Validators.required]),
    address:new FormGroup({
      addressline:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      city:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      state:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      pincode:new FormControl('',[Validators.required, Validators.maxLength(6)])
    }),
    type: new FormControl(),
    // busFee:new FormControl(),
    // hostelfee:new FormControl(),
    marks: new FormArray([])

});

get marksFromArray(){
  return this.studentForm.get('marks') as FormArray;
}

addMarks(){
  this.marksFromArray.push(
    new FormGroup({
      marks:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl(),
    })
  )
}
deleteMarks(i:number) {
  this.marksFromArray.removeAt(i);
}

constructor(){
  this.studentForm.get("type")?.valueChanges.subscribe(
    (data:any) =>{
      if(data=='dayScholor'){
        this.studentForm.addControl('busFee',new FormControl());
        this.studentForm.removeControl("hostelFee");
      }
      else{
        this.studentForm.addControl('hostelFee',new FormControl());
        this.studentForm.removeControl("busFee");
      }
    }
  )
}
submit(){
  console.log(this.studentForm);
  // Save the form data to the backend
}
}
