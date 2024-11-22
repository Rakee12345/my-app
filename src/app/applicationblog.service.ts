import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApplicationblogService {

  constructor(private _httpClient:HttpClient) { }

  getapplicationblog():Observable<any>{
      return this._httpClient.get('https://dummyapi.online/api/blogposts');
  }
}
