import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdService {

baseUrl="https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient:HttpClient) { }
  getStudentId():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  viewStudentId(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  getFilteredStudentId(term: string): Observable<any> {
    return this._httpClient.get(this.baseUrl+"?filter="+term);

  }

  getSortedStudentId(column:string, order: string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column +"&order="+order);
  }

  getPagedStudentId(limit:number, page:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }
  createStudentId(data:any):Observable<any> {
    return this._httpClient.post(this.baseUrl,data);

  }

  updateStudentId(id:string,data:any):Observable<any> {
    return this._httpClient.put(this.baseUrl+"/"+id, data);

  }



  deleteStudentId(studentId:string):Observable<any> {
    return this._httpClient.delete(this.baseUrl+"/"+ studentId);


  }



}
