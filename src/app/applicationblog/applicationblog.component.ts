import { Component } from '@angular/core';
import { ApplicationblogService } from '../applicationblog.service';

@Component({
  selector: 'app-applicationblog',
  templateUrl: './applicationblog.component.html',
  styleUrls: ['./applicationblog.component.less']
})
export class ApplicationblogComponent {
applicationblog:any=[];

constructor(private _applicationblogService: ApplicationblogService) {
  _applicationblogService.getapplicationblog().subscribe(
    (data:any) => {
      this.applicationblog = data;
  },
      (err:any) => {
        alert("error")
      
      }
    )
  }
}
