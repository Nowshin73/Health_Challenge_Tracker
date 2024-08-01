import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Workouts } from 'src/app/Workouts';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent implements OnInit {
  @Input() workout: Workouts;
  @Output() workoutDelete: EventEmitter<Workouts> = new EventEmitter();
  constructor() {
   
   }

  ngOnInit(): void {
  }

  onClick(workout: Workouts){
    this.workoutDelete.emit(workout);
    console.log("onClick has been triggered")
  }
}
