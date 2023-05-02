import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FeedbackService} from "../../services/feedback.service";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit, OnDestroy {

  private feedback: Feedback | undefined;

  private unsubscirbe: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private feedvackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.unsubscirbe = this.activatedRoute.data.subscribe((data) => {
      this.feedback = data['feedback'];
    })
  }

  updateFeedback(feedback: Feedback): void {
    this.feedvackService.updateFeedback(feedback).subscribe(() => {
      this.navigateToFeedbacks();
    })
  }

  navigateToFeedbacks(): void {
    this.router.navigate([
      "feedback",
      this.feedback?.id
    ])
  }

  deleteFeedback(feedback: Feedback): void {
    this.feedvackService.updateFeedback(feedback).subscribe(() => {
      this.navigateToFeedbacks();
    })
  }

  ngOnDestroy(): void {
    this.unsubscirbe!.unsubscribe();
  }
}
