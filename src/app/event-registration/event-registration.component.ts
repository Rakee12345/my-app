import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.less']
})
export class EventRegistrationComponent {
name:string= "";
names:string[] = [];

register(){
  this.names.push(this.name);
}
}
