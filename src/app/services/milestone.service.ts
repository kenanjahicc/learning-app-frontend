import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Milestone} from '../models/milestone.model';

@Injectable()
export class MilestoneService {

  constructor() {
  }

  getMilestones(habitId: number): Observable<Milestone[]> {
    return of([
      {
        id: 46,
        color: '#f0af9b',
        title: 'First week',
        time: 1000 * 60 * 60 * 24 * 7,
        reached: false,
      },
      {
        id: 54,
        color: '#adeeaf',
        title: 'First day',
        time: 1000 * 60 * 60 * 24,
        reached: false,
      },
    ]);
  }

  getMilestone(milestoneId: number): Observable<Milestone> {
    return of({
        id: 31,
        color: '#9bd8f0',
        title: 'Milestone test, to update',
        time: 1000 * 60 * 60,
        reached: false,
      });
  }

  createMilestone(milestone: Milestone): Observable<Milestone> {
    console.log('Reached milestonesService with intention to create milestone:', milestone);
    return of({
        id: 31,
        color: '#9bd8f0',
        title: 'Milestone test, to update',
        time: 1000 * 60 * 60,
        reached: false,
      });
  }

  updateMilestone(milestone: Milestone): Observable<Milestone> {
    console.log('Reached milestonesService with intention to update milestone:', milestone);
    return of({
        id: 22,
        color: '#f09bef',
        title: 'Updated milestone',
        time: 1000 * 60,
        reached: false,
      });
  }

  deleteMilestone(milestoneId: number): Observable<null> {
    console.log('Reached milestonesService with intention to delete milestone:', milestoneId);
    return of(null);
  }
}
