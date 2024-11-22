import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.less']
})
export class VehicleComponent {
  vehicles:any =[];
  term:string ="";

  

  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data:any) =>{
        this.vehicles = data;
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }
filter(){
  this._vehicleService.getFilteredVehicles(this.term).subscribe(
    (data:any) =>{
      this.vehicles = data;
    },
    (err:any) =>{
      alert("Internal server error");
    }
  )
}

column:string ="";
  order:string ="";

  sort(){
    this._vehicleService.getSorteddVehicles(this.column, this.order).subscribe(
      (data:any) =>{
        this.vehicles = data;
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }

  limit:number = 0; 
  page:number = 0;

  pagination(){
    this._vehicleService.getPagedVehicles(this.limit, this.page).subscribe(
      (data:any) =>{
        this.vehicles = data;
        location.reload();
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any) =>{
        alert("Deleted Successfully!!!");
        location.reload();
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }
}

