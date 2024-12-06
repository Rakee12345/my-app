import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  // user:User = {name:'a',age:20};

 user:User ={
  name:'a',
  age:20,
  address:{
    city:'hyd',
    pin:12345
  },
  phones:[1234567890,9876543210]
 };

}
