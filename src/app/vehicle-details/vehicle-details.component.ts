import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.less']
})
export class VehicleDetailsComponent {
  vehicle:any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _vehicleService: VehicleService){
    _activatedRoute.params.subscribe(
      (data:any) => {
        console.log(data);
        // do api call
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any) => {
            this.vehicle = data;
          }
        )
      }
    )

  }

}
