import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly Url = 'https://teach-me.herokuapp.com/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.Url);
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post<any>(this.Url, message);
  }
}
