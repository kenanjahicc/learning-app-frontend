import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Habit} from '../../models/habit.model';
import {Subscription} from 'rxjs';
import {Route} from '../../constants/route.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {YesNoDialogComponent} from '../common/yes-no-dialog/yes-no-dialog.component';
import {LogService} from '../../services/log.service';
import {Log} from '../../models/log.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  public formattedTime: string = '';
  public habit!: Habit;
  public form!: FormGroup;

  private time: number | undefined;
  private intervalId: number | undefined;
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private logService: LogService) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.habit = data['habit'];
      this.time = this.habit!.time;
      this.startTicking();
    }));
    this.form = this.formBuilder.group({
      'reason': [''],
    });
  }

  public submit(): void {
    if (!this.form.value['reason']) {
      this.openDialog();
      return;
    }

    this.createLog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        title: 'Reason for breaking habit',
        text: 'Are you sure you don\'t want to provide reason for breaking this habit?',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createLog()
      }
    });
  }

  private createLog(): void {
    this.logService.createLog(this.form.value).subscribe((log: Log) => {
      this.navigateToLogs();
    });
  }

  private startTicking() {
    this.intervalId = setInterval(() => {
      this.time!++;
      this.formattedTime = new Date(this.time! * 1000).toISOString().slice(11, 19);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }


  navigateToLogs() {
    this.router.navigate([
      this.habit?.id,
      Route.LOGS,
    ]);
  }

  navigateToMilestones() {
    this.router.navigate([
      this.habit?.id,
      Route.MILESTONES,
    ]);
  }

}
