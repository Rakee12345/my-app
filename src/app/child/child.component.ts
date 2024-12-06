import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent {

  @Input() max: number = 0;  // Set the max character limit
  text: string = '';

            // Stores the text entered by the user
//  @Output() input:EventEmitter<number> = new EventEmitter();

  // onInput() {
  //   if (this.text.length > this.max) {
      
  //     this.text = this.text.substring(10, this.max);  // Trim the text if it exceeds the max limit
  //     console.log(this.text);  // For testing purposes only, remove in production code.
  //   }
  // }


// test cases
  @Input() a:number = 0;

  @Output() bEvent:EventEmitter<number> = new EventEmitter();

  send(){
    this.bEvent.emit(20);
  }

}
