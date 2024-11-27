import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  constructor(private _router:Router){}

  logout(){
    this._router.navigateByUrl("/login")

    // delere token
    sessionStorage.removeItem("token");
  }

}
