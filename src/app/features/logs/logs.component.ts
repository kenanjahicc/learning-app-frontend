import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Log} from '../../models/log.model';
import {ResolverProperty} from '../../constants/resolver-property.enum';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnDestroy {

  public logs: Log[] = [];
  public displayedColumns: string[] = [];
  private habitId!: number;
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['time', 'reason'];
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.logs = data[ResolverProperty.LOGS];
      this.habitId = data[ResolverProperty.HABIT_ID];
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  goBack(): void {
    this.router.navigate([
      this.habitId,
    ]);
  }
}
