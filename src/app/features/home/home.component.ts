import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HabitService} from '../../services/habit.service';
import {Habit} from '../../models/habit.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private habitService: HabitService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
    });
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.habitService.createHabit(this.form.value).subscribe((habit: Habit) => {
      this.navigateToHabit(habit.id!);
    });
  }

  private navigateToHabit(habitId: number) {
    this.router.navigate([
      habitId,
    ]);
  }
}
