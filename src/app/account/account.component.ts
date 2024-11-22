import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent {

  account:any=[];
  


  constructor(private _accountService:AccountService) {

    _accountService.getaccount().subscribe(
      (data:any) => {
        this.account = data;
      },
      (err:any) => {
        alert("Internal error")
      }
    )
  }

  term:string="";

  filter(){
    this._accountService.getFilterAccount(this.term).subscribe(
      (data:any) => {
        this.account = data;
      },
      (err:any) => {
        alert("Internal error")
      }
    )
  }
 
  column: string="";
  order: string="";

  sort(){
    this._accountService.getSortedAccount(this.column, this.order).subscribe(
      (data:any) => {
        this.account = data;
        
      },
      (err:any) => {
        alert("Internal error")
      }
    )
  }

  limit:number=0;
  page:number=0;

  pagination(){
    this._accountService.getPagedAccounts(this.limit, this.page).subscribe(
      (data:any) => {
        this.account = data;
        location.reload();
      },
      (err:any) => {
        alert("Internal error")
      }
    )
  }

  delete(id:string){
    if(confirm("Are you sure you want to delete this account?")){
      this._accountService.deleteAccount(id).subscribe(
        (data:any) => {
          alert("Account deleted successfully");
          location.reload();
        },
        (err:any) => {
          alert("Internal error")
        }
      )
    }
  }

  // postAccount(id:string){
  //   this._accountService.PostAccount(id).subscribe(
  //     (data:any) => {
  //       alert("Account posted successfully");
  //       location.reload();
  //     },
  //     (err:any) => {
  //       alert("Internal error")
  //     }
  //   )
  // }

}
