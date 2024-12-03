import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.less']
})
export class AccountDetailsComponent {
accounts:any = {};
  constructor(private _activatedRoute: ActivatedRoute,private _accountService:AccountService){
  
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data);
        // do api call
        _accountService.getaccounts(data.id).subscribe(
          (data:any) => {
            this.accounts = data;
          },
          
        )
      }
    )

  }
}
