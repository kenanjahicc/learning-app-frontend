import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from '@angular/router';
import {FeedbackService} from "../../services/feedback.service";
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Professor} from "../../models/professor.model";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  public options = [
    {
      label: 'Complaint',
      color: '#a34',
    },
    {
      label: 'Observation',
      color: '#adeeaf',
    },
    {
      label: 'Suggestion',
      color: '#9bd8f0',
    },
  ];

  private feedback: Feedback | undefined;

  private unsubscribe: Subscription | undefined;
  private professor!: Professor;

  constructor(private activatedRoute: ActivatedRoute,
              private feedbackService: FeedbackService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      this.feedback = data['feedback'];
      this.professor = data['professor'];
    })
    this.form = this.formBuilder.group({
      'title': ["", Validators.required],
      'content': ["", Validators.required],
      'professorId': [this.professor.id, Validators.required],
    });
  }


  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  submit(): void {
    this.createFeedback(this.form.value);
  }

  createFeedback(feedback: Feedback): void {
    this.feedbackService.createFeedback(feedback, this.professor.id).subscribe(() => {
      this.navigateToProfessor();
    });
  }

  navigateToProfessor() {
    this.router.navigate([
      this.professor.id
    ])
  }

}
