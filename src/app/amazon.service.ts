import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _http:HttpClient) { }

  getProducts() {
    return this._http.get('https://fakestoreapi.com/products');
  }
}
