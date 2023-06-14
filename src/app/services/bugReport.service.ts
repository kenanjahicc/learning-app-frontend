import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BugReport} from "../models/bugReport.model";

@Injectable()
export class BugReportService {

  private readonly baseUrl: string = 'https://teach-me.herokuapp.com/bug-report';

  constructor(private http: HttpClient) {
  }

  getBugReport(id: number): Observable<BugReport> {
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.get<BugReport>(`${this.baseUrl}/${id}`, options);
  }
}
