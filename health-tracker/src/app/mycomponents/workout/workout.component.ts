import { Component, OnInit } from '@angular/core';
import { Workouts } from 'src/app/Workouts';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts:Workouts[];
  constructor() {
    this.workouts = [
      {
        sno:1,
        name:"nowshin",
        time:30,
        type:1,
        done:false
      },
      {
        sno:2,
        name:"nowshin",
        time:10,
        type:3,
        done:false
      },
      {
        sno:3,
        name:"nowshin",
        time:30,
        type:4,
        done:false
      },
      {
        sno:4,
        name:"nowshin",
        time:30,
        type:1,
        done:false
      },
      {
        sno:5,
        name:"nowshin",
        time:30,
        type:1,
        done:false
      },
    ]
   }

  ngOnInit(): void {
  }
  deleteWorkout(workout:Workouts){
    console.log(workout);
    const index =this.workouts.indexOf(workout);
    this.workouts.splice(index,1);
  }
  addWorkout(workout:Workouts){
    console.log(workout);
    this.workouts.push(workout);
  }
}
