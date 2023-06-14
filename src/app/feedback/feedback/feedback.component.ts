import {Component, OnDestroy, OnInit} from "@angular/core";
import {Feedback} from "../../models/feedback.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Professor} from "../../models/professor.model";
import {FeedbackService} from "../../services/feedback.service";
import {MatDialog} from "@angular/material/dialog";
import {YesNoDialogComponent} from "./yes-no-dialog/yes-no-dialog.component";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {

  public feedbacks: Feedback[] = [];

  public professor!: Professor;
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription[] = [];

  private feedback!: Feedback;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private feedbackService: FeedbackService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['title', 'date', 'content', 'action'];
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.professor = data['professor'];
      this.feedbacks = data['feedbacks'];
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  goToAddFeedback(): void {
    this.router.navigate([
      this.professor.id,
      "feedback"
    ]);
  }


  goBackToProfessor(): void {
    this.router.navigate([
      this.professor.id
    ]);
  }

  editFeedback(feedbackId: number): void {
    this.router.navigate([
      this.professor.id,
      'feedbacks',
      feedbackId
    ])
  }

  deleteFeedback(feedbackId: number) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        title: 'Delete feedback',
        text: 'Are you sure you want to delete this feedback?',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.feedbackService.deleteFeedback(feedbackId!).subscribe(() => {
          this.goBackToProfessor();
        });
      }
    });
  }
}
