import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from '@angular/router';
import {FeedbackService} from "../../services/feedback.service";
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {

  private feedback: Feedback | undefined;

  private unsubscribe: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private feedbackService: FeedbackService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      this.feedback = data['feedback'];
    })
  }

  createFeedback(feedback: Feedback): void {
    this.feedbackService.createFeedback(feedback).subscribe(() => {
      this.navigateToFeedback();
    });
  }

  private navigateToFeedback() {
    this.router.navigate([
      "feedback",
      this.feedback?.id
    ]);
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }
}
