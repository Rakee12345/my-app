import { Component } from '@angular/core';
import { SocialProfileService } from '../social-profile.service';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.less']
})
export class SocialProfileComponent {

  profiles:any=[]


  constructor(private _socialProfilesService:SocialProfileService){

    _socialProfilesService.getSocialProfiles().subscribe(

      (data:any)=>{
        this.profiles=data;
      },
      (err:any)=>{
        alert("Internal server issue");
      }
    )
  }

}