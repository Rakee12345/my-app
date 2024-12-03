import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private _httpClient:HttpClient) { }

  getaccount():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getaccounts(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  getFilterAccount(term: string): Observable<any> {
    return this. _httpClient.get(this.baseUrl+"?filter="+term);
}

  getSortedAccount(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  
  getPagedAccounts(limit: number,page: number): Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }

  deleteAccount(id:string):Observable<any> {
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

  createAccount(data:any):Observable<any> {
    return this._httpClient.post(this.baseUrl,data);
  }

  updateAccount(id:string,data:any):Observable<any> {
    return this._httpClient.put(this.baseUrl+"/"+id, data);

}
}