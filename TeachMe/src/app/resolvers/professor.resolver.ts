import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfessorService} from "../services/professor.service";
import {Professor} from "../models/professor.model";

@Injectable()
export class ProfessorResolver implements Resolve<Professor> {
  constructor(private professorService: ProfessorService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Professor> {
    const professorId: string = route.paramMap.get("professorPageId")!;
    return this.professorService.getProfessor(+professorId);
  }

}
