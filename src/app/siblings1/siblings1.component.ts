import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblings1',
  templateUrl: './siblings1.component.html',
  styleUrls: ['./siblings1.component.less']
})
export class Siblings1Component {

  count:number = 0;

  constructor(private _commonService: CommonService){}

  send(){
    this._commonService.countSub.next(this.count);
    
  }

}
