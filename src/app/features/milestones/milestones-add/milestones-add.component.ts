import {Component, OnDestroy, OnInit} from '@angular/core';
import {Milestone} from '../../../models/milestone.model';
import {MilestoneService} from '../../../services/milestone.service';
import {Route} from '../../../constants/route.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {ResolverProperty} from '../../../constants/resolver-property.enum';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-milestones-add',
  templateUrl: './milestones-add.component.html',
  styleUrls: ['./milestones-add.component.css']
})
export class MilestonesAddComponent implements OnInit, OnDestroy {

  private habitId!: number;
  private unsubscribe: Subscription[] = [];

  constructor(private milestoneService: MilestoneService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.habitId = data[ResolverProperty.HABIT_ID];
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  createMilestone(milestone: Milestone): void {
    this.milestoneService.createMilestone(milestone).subscribe(() => {
      this.navigateToMilestones();
    });
  }

  private navigateToMilestones() {
    this.router.navigate([
      this.habitId,
      Route.MILESTONES,
    ]);
  }
}
