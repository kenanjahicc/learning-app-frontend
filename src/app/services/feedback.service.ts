import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.get<Feedback>(`${this.baseUrl}/${id}`, options);
  }

  public GetFeedbacks(professorId: number): Observable<Feedback> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.get<Feedback>(`${this.baseUrl}/${professorId}/feedbacks`, options)
  }

  public createFeedback(feedback: Feedback, profId: number): Observable<Feedback> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.post<Feedback>(`${this.baseUrl}/${profId}/feedback`, feedback, options);
  }

  public updateFeedback(feedback: Feedback, feedbackId: number): Observable<Feedback> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.put<Feedback>(`${this.baseUrl}/${feedbackId}/edit`, feedback, options);
  }

  public deleteFeedback(id: number): Observable<null> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.delete<null>(`${this.baseUrl}/${id}`, options);
  }
}
