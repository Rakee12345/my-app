import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.less']
})
export class PhotoComponent {
photos:any=[];
 constructor(private _photoService: PhotoService){
   _photoService.getPhoto().subscribe(
    (data:any) => {
      this.photos = data;
    },
    (error: any) => {
      alert('Error retrieving photos');
    }
  )
}
}



