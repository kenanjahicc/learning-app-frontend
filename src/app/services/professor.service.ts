import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Professor} from "../models/professor.model";


@Injectable()
export class ProfessorService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://teach-me.herokuapp.com/professor';
  }

  getProfessor(id: number): Observable<Professor> {
    const token=localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    return this.http.get<Professor>(`${this.baseUrl}/${id}`, options);
  }

}
