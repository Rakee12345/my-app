import { Component } from '@angular/core';
import { IMDBService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.less']
})
export class IMDBComponent {
  imdb:any=[];
  constructor(private _imdbService:IMDBService){
    _imdbService.getimdb().subscribe(
      (data: any) =>{
        this.imdb = data;
      },
      (err: any) =>{
        alert("err.message")
      }
    )
  }
  Math = Math;
}
