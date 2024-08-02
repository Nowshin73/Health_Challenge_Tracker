import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Workouts } from 'src/app/Workouts';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  name:string;
  time:number;
  type:string;
 
  @Output() workoutAdd: EventEmitter<Workouts> = new EventEmitter();
  constructor() { 
  }
  ngOnInit(): void {
  }
  onSubmit(){
    const workout = {
      sno:1,
      name:this.name,
      time:this.time,
      type:this.type,
      undone:true
    }

    console.log(workout);
    this.workoutAdd.emit(workout);
    console.log(workout);
   }

}
