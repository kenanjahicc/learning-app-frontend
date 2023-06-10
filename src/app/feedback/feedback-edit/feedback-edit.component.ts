import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FeedbackService} from "../../services/feedback.service";
import {Professor} from "../../models/professor.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit, OnDestroy {

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

  private feedback!: Feedback;

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
      'title': [this.feedback?.title, Validators.required],
      'content': [this.feedback?.content, Validators.required],
      'professorId': [this.professor.id, Validators.required],
    });
  }


  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  submit(): void {
    this.updateFeedback(this.form.value);
  }

  updateFeedback(feedback: Feedback): void {
    this.feedbackService.updateFeedback(feedback, this.feedback.id!).subscribe(() => {
      this.navigateToProfessor();
    });
  }

  navigateToProfessor() {
    this.router.navigate([
      this.professor.id
    ])
  }

}
