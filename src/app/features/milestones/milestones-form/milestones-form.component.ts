import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Milestone} from '../../../models/milestone.model';
import {Route} from '../../../constants/route.enum';
import {MilestoneService} from '../../../services/milestone.service';
import {ResolverProperty} from '../../../constants/resolver-property.enum';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-milestones-form',
  templateUrl: './milestones-form.component.html',
  styleUrls: ['./milestones-form.component.css']
})
export class MilestonesFormComponent implements OnInit, OnDestroy {

  @Output()
  saveMilestone: EventEmitter<Milestone> = new EventEmitter<Milestone>();

  @Input()
  milestone: Milestone | undefined;

  public form!: FormGroup;
  public colors = [
    {
      label: 'Redish',
      color: '#f0af9b',
    },
    {
      label: 'Greenish',
      color: '#adeeaf',
    },
    {
      label: 'Blueish',
      color: '#9bd8f0',
    },
  ];

  private habitId!: number;
  private unsubscribe: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
              private milestoneService: MilestoneService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.habitId = data[ResolverProperty.HABIT_ID];
    }));

    this.form = this.formBuilder.group({
      'id': [this.milestone?.id],
      'title': [this.milestone?.title, Validators.required],
      'color': [this.milestone?.color],
      'time': [this.milestone?.time, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveMilestone.emit(this.form.value);
  }

  public navigateToMilestones() {
    this.router.navigate([
      this.habitId,
      Route.MILESTONES,
    ]);
  }

}
