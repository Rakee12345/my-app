import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.less']
})
export class FlipkartComponent {

  term:string="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }
  
  freedelivery(){
    this.products=this.products.filter((product:any)=>product.FreeDelivery=='true');
  }

  lowPrice(){
    this.products=this.products.sort((a:any, b:any)=>a.price-b.price);
  }

  highPrice(){
    this.products=this.products.sort((a:any, b:any)=>b.price-a.price);
  }

  lowRating(){
    this.products=this.products.sort((a:any, b:any)=>a.Rating-b.Rating);
  }

  highRating(){
    this.products=this.products.sort((a:any, b:any)=>b.Rating-a.Rating);
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return product;
    })
  }
  charges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+25;
      return product;
    })
  }
  total(){
  let totalprice=this.products.reduce((sum:any,product:any)=>sum+product.price,0)
    alert(totalprice)
  }
  cart(){
    alert("total cart items are ="+this.products.length)
  }
  productname:string="";
  productprice:string="";
  productRating:string="";
  productFreeDelivery:string="";

addProduct(){
  let product={
    name: this.productname,
    price:this.productprice,
    Rating:this.productRating,
    FreeDelivery: this.productFreeDelivery
   
  }
  this.products.unshift(product);
 
}

  products:any = [
    { name: 'pen', price: 10, Rating: 3, FreeDelivery: 'true'},
    { name: 'phone', price: 2000, Rating: 2, FreeDelivery: 'false'},
    { name: 'shirt', price: 400, Rating: 4, FreeDelivery: 'true'},
    { name: 'cap', price: 200, Rating: 5, FreeDelivery: 'false'},
    { name: 'mobilecase', price: 300, Rating: 2, FreeDelivery: 'true'},
    { name: 'remote', price: 400, Rating: 2.5, FreeDelivery: 'false'},
  ]
  delete(i:number){
    this.products.splice(i, 1);
  }
}
