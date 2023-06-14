import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable()
export class NotificationService {
  private baseUrl = 'https://teach-me.herokuapp.com';
  constructor(private http: HttpClient) { }
  public getNotifications(): Observable<Notification[]> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
      return this.http.get<Notification[]>(`${this.baseUrl}/notification/all`, options);
  }
}
