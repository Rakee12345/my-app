import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.less']
})
export class CreateAccountComponent {
 id:string = "";
  constructor(private _accountSevice:AccountService , private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data);
        this.id = data.id;
        // api call
        _accountSevice.getaccounts(data.id).subscribe(
          (data:any) => {
            this.accountForm.patchValue(data);
          },
         
        )
      }
    )
   }

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
  if(this.id){
    this._accountSevice.updateAccount(this.id, this.accountForm.value).subscribe(
      (data:any) => {
        alert("Account updated successfully");
        location.reload();
      },
      (err:any) => {
        alert("update failed");
      }
    )
  }
  else{
    this._accountSevice.createAccount(this.accountForm.value).subscribe(
      (data:any) => {
        alert("Account created successfully");
        location.reload();
      },
      (err:any) => {
        alert("creation failed");

      }
    )
  }
}
}
