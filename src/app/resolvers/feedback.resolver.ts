import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FeedbackService} from "../services/feedback.service";
import {Feedback} from "../models/feedback.model";

@Injectable()
export class FeedbackResolver implements Resolve<Feedback> {
  constructor(private feedbackService: FeedbackService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Feedback> {
    const feedbackId = route.paramMap.get("feedbackId");
    return this.feedbackService.GetFeedback(+feedbackId!);
  }
}
