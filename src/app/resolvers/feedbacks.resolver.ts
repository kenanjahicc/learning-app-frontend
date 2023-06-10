import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Feedback} from "../models/feedback.model";
import {FeedbackService} from "../services/feedback.service";

@Injectable()
export class FeedbackResolver implements Resolve<Feedback> {

  constructor(private feedbackService: FeedbackService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Feedback> {
    const id = route.paramMap.get("Professorid");
    return this.feedbackService.GetFeedbacks(+id!);
  }
}
