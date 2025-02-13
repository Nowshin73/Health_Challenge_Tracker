import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './mycomponents/workout/workout.component';
import { AddWorkoutComponent } from './mycomponents/add-workout/add-workout.component';
import { WorkoutItemComponent } from './mycomponents/workout-item/workout-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    AddWorkoutComponent,
    WorkoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
