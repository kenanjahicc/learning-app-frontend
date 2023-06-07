import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BugReport} from "../models/bugReport.model";

@Injectable()
export class BugReportService {

  // todo https://habit-reboot.herokuapp.com --->
  private readonly baseUrl: string = 'http://localhost:8080/bug-report';

  constructor(private http: HttpClient) {
  }

  getBugReport(id: number): Observable<BugReport> {
    return this.http.get<BugReport>(`${this.baseUrl}/${id}`);
  }
}
