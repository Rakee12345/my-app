import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent {

  constructor(private _accountSevice:AccountService) { }

public accountForm:FormGroup = new FormGroup(
  {
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  },
)

submit(){
  console.log(this.accountForm);
  this._accountSevice.createAccount(this.accountForm.value).subscribe(
    (data:any) => {
      alert("Account created successfully");
      
    },
    (err:any) => {
      alert("creation failed");

    }
  )
}

}
