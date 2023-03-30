import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Habit} from '../models/habit.model';

@Injectable()
export class HabitService {

  // constructor(private http: HttpClient) { }

  getHabit(id:number): Observable<Habit> {
    // return this.http.get<Habit>('https://localhost:8080/habit/' + id);
    // go to backend and return the data
    return of({
      id: 1,
      title: 'Avoid snacks',
      time: 158,
    });
  }

  createHabit(habit:Habit): Observable<Habit> {
    console.log('Reached habitService with intention to create habit:', habit);
    return of({
      id: 1000,
      title: 'Exercise every day',
      time: 2,
    });
  }
}
