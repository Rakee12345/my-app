// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{

  public liginForm: FormGroup=new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  
  constructor(private _loginService: LoginService, private _router:Router) { }
  login(){
  
      console.log(this.liginForm);
      this._loginService.login(this.liginForm.value).subscribe(
        (data:any) => {
           alert("Login successful!!!");
          //  go to dashboard
          this._router.navigateByUrl('/dashboard');
          // store token
          sessionStorage.setItem('token',data.token);
        },
          
        
        (err:any) => {
          alert("invalid Credentials");
        }
      )
      
  }

}