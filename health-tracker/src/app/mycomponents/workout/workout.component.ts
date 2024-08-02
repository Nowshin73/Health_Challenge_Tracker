import { Component, OnInit } from '@angular/core';
import { Workouts } from 'src/app/Workouts';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  localItem =localStorage.getItem("workouts");

  workouts:Workouts[];
  constructor() {
    if(this.localItem==null){
      this.workouts = [];
    }
    else{
      this.workouts = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  deleteWorkout(workout:Workouts){
    console.log(workout);
    const index =this.workouts.indexOf(workout);
    this.workouts.splice(index,1);
    localStorage.setItem("workouts",JSON.stringify(this.workouts));
  }
  addWorkout(workout:Workouts){
    console.log(workout);
    this.workouts.push(workout);
    localStorage.setItem("workouts",JSON.stringify(this.workouts));
  }
  toggleWorkout(workout:Workouts){
    console.log(workout);
    const index =this.workouts.indexOf(workout);
    this.workouts[index].done = !this.workouts[index].done;
    localStorage.setItem("workouts",JSON.stringify(this.workouts));
  }
}
