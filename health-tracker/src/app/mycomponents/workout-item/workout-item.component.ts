import { Component, Input, OnInit } from '@angular/core';
import {  Workouts } from 'src/app/Workouts';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent implements OnInit {
  @Input()
  workout: Workouts;
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
