import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent {
public userForm: FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  age:new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),

  email:new FormControl('',[Validators.required, Validators.email]),

  phone:new FormControl('',[Validators.required,  Validators.min(1000000000), Validators.max(9999999999)]),
  address:new FormGroup({
    city:new FormControl('',[Validators.required]),
    pin:new FormControl('',[Validators.required,  Validators.min(100000), Validators.max(999999)])
  }),
  type:new FormControl(),
  // busFee:new FormControl(),
  // hostelFee:new FormControl(),
  cards: new FormArray([])
})

get cardsFormArray(){
  return this.userForm.get('cards') as FormArray;
}

addCard(){
  this.cardsFormArray.push(
    new FormGroup({
    number:new FormControl('',[Validators.required]),
    expiry:new FormControl('',[Validators.required]),
    cvv:new FormControl('',[Validators.required])
    
  })
)
}

deleteCard(i:number) {
  this.cardsFormArray.removeAt(i);
}

constructor(){
  this.userForm.get("type")?.valueChanges.subscribe(
    (data:any) =>{
      if(data=='dayScholor'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl("hostelFee");
      }
      else{
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl("busFee");
      }
    }
  )
}
submit(){
  console.log(this.userForm);
}
}
