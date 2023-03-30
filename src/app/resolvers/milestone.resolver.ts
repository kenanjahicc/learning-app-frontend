import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Milestone} from '../models/milestone.model';
import {MilestoneService} from '../services/milestone.service';
import {Route} from '../constants/route.enum';

@Injectable()
export class MilestoneResolver implements Resolve<Milestone> {

  constructor(private milestoneService: MilestoneService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Milestone> {
    const milestoneId: string = route.data[Route.MILESTONE_ID];
    return this.milestoneService.getMilestone(+milestoneId);
  }
}
