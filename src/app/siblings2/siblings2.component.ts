import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblings2',
  templateUrl: './siblings2.component.html',
  styleUrls: ['./siblings2.component.less']
})
export class Siblings2Component {

  count: number = 0;

  constructor(private _commonService: CommonService){
   _commonService.countSub.subscribe(
    (data:any) =>{
      this.count = data;
    }
  )
  }

}
