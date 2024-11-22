import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.less']
})
export class AmazonComponent {
  products:any=[];
 constructor(private _amazonSevice:AmazonService){
   _amazonSevice.getProducts().subscribe(
    (data:any) => {
      this.products = data;
    },
    (error: any) => {
      alert('Error retrieving products');
    }
  )
 }
}
