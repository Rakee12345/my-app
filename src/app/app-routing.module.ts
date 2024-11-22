import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PhotoComponent } from './photo/photo.component';
import { WeatherComponent } from './weather/weather.component';
import { ApplicationblogComponent } from './applicationblog/applicationblog.component';
import { IMDBComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentIdComponent } from './create-student-id/create-student-id.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, children:[
      {path: 'home', component: HomeComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'DataBinding',component:DataBindingComponent},
      {path:'calculator',component:CalculatorComponent},
      {path:'rectangle',component:RectangleComponent},
      {path:'circle',component:CircleComponent},
      {path:'BMI', component:BMIComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'EventRegistration',component:EventRegistrationComponent},
      {path:'EmployeeRegistration',component:EmployeeRegistrationComponent},
      {path:'Employee',component:EmployeeComponent},
      {path:'Flipkart',component:FlipkartComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'account',component:AccountComponent},
      {path:'amazon',component:AmazonComponent},
      {path:'mail',component:MailComponent},
      {path:'photo',component:PhotoComponent},
      {path:'weather',component:WeatherComponent},
      {path:'applicationblog',component:ApplicationblogComponent},
      {path:'IMDB',component:IMDBComponent},
      {path:'pokemon',component:PokemonComponent},
      {path:'create-vehicle',component:CreateVehicleComponent},
      {path:'create-account',component:CreateAccountComponent},
      {path:'student_id',component:StudentIdComponent},
      {path:'create-studentId',component:CreateStudentIdComponent},





    ]},
  {path: '', component:LoginComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
