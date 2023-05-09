import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Professor} from "../models/professor.model";


@Injectable()
export class ProfessorService {
  private baseUrl: string = "https://teach-me.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  getProfessor(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

}
