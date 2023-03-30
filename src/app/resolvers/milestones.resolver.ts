import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Milestone} from '../models/milestone.model';
import {MilestoneService} from '../services/milestone.service';
import {Route} from '../constants/route.enum';

@Injectable()
export class MilestonesResolver implements Resolve<Milestone[]> {

  constructor(private milestoneService: MilestoneService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Milestone[]> {
    const habitId: string = route.data[Route.HABIT_ID];
    return this.milestoneService.getMilestones(+habitId);
  }
}
