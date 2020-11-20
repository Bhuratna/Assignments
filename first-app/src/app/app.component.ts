import { Component } from '@angular/core';
import { Trainee } from './model/trainee';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title:string = 'first-app';

  description:string="our first attempt at writing";

  trainees=[
    new Trainee(1,"Bhuratna"),
    new Trainee(2, "Mishra"),
    new Trainee(3,"jay"),
    new Trainee(4,"prakhar")
  
  ];


  getDescription():string{
  return this.description;
  }



}