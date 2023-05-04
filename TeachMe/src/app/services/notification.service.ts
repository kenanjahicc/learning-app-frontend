import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable()
export class NotificationService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  public getNotifications(): Observable<Notification[]> {
      return this.http.get<Notification[]>(`${this.baseUrl}/notification/all`);
  }
}
