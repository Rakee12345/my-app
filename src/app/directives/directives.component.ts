import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent {

age: number=20;
ages: number[] = [10,20,30,40,50,60];

state: string="telangana";
states: string[] =["telangana","andra","karnataka" ];

products:any= [
  {name:"pen",price:20},
  {name:"shirt",price:2000},
  {name:"mobile",price:15000},
  {name:"laptop",price:45000}
]
today:any =new Date();

}
