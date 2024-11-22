import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.less']
})
export class MailComponent {
  mail:any=[];

  constructor(private _mailService:MailService){
    _mailService.getmail().subscribe(
      (data:any) => {
      this.mail = data;
    },
    (err:any) => {
      alert("Internal server error");
    }
  );
  }
}
