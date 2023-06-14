import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Feedback} from "../models/feedback.model";

@Injectable()
export class FeedbackService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://teach-me.herokuapp.com/feedback';
  }

  public GetFeedback(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.baseUrl}/${id}`);
  }

  public GetFeedbacks(professorId: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.baseUrl}/${professorId}/feedbacks`)
  }

  public createFeedback(feedback: Feedback, profId: number): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.baseUrl}/${profId}/feedback`, feedback);
  }

  public updateFeedback(feedback: Feedback, feedbackId: number): Observable<Feedback> {
    return this.http.put<Feedback>(`${this.baseUrl}/${feedbackId}/edit`, feedback);
  }

  public deleteFeedback(id: number): Observable<null> {
    this.http.delete<Feedback>(`${this.baseUrl}/${id}`);
    return of(null);
  }
}
