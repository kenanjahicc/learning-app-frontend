import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly Url = 'https://teach-me.herokuapp.com/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any[]> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.get<any[]>(this.Url, options);
  }

  sendMessage(message: any): Observable<any> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.post<any>(this.Url, message, options);
  }
}
