import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FeedbackService} from "../../services/feedback.service";
import {Professor} from "../../models/professor.model";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit, OnDestroy {

  private feedback: Feedback[] | undefined;

  private professor!: Professor;

  private unsubscirbe: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private feedvackService: FeedbackService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.unsubscirbe = this.activatedRoute.data.subscribe((data) => {
      this.feedback = data['feedbacks'];
      this.professor = data['professor'];
    })
  }

  // updateFeedback(feedback: Feedback): void {
  //   this.feedvackService.updateFeedback(feedback).subscribe(() => {
  //     this.navigateToFeedbacks();
  //   })
  // }





  // deleteFeedback(): void {
  //   const dialogRef = this.dialog.open(YesNoDialogComponent, {
  //     data: {
  //       title: 'Delete milestone',
  //       text: 'Are you sure you want to delete this milestone?',
  //     },
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.feedvackService.deleteFeedback(this.feedback.id).subscribe(() => {
  //         this.navigateToMilestones();
  //       });
  //     }
  //   });
  // }

  ngOnDestroy(): void {
    this.unsubscirbe!.unsubscribe();
  }
}
