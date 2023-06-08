import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BugReport} from "../models/bugReport.model";

@Injectable()
export class BugReportService {

  private readonly baseUrl: string = 'https://teach-me.herokuapp.com/bug-report';

  constructor(private http: HttpClient) {
  }

  getBugReport(id: number): Observable<BugReport> {
    return this.http.get<BugReport>(`${this.baseUrl}/${id}`);
  }
}
