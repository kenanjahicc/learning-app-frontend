import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Professor} from "../../models/professor.model";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {BugReport} from "../../models/bugReport.model";
import {BugReportService} from "../../services/bugReport.service";

@Component({
  selector: 'app-professor-profile-page',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit, OnDestroy {
  public professor!: Professor;
  private unsubscirbe: Subscription | undefined;
  public imagePath!: SafeUrl;

  public bugReport!: BugReport;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bugReportService: BugReportService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.unsubscirbe = this.activatedRoute.data.subscribe((data) => {
      this.professor = data['professor'];
    })
    this.showImage(this.professor.id);
  }

  public navigateToFeedback(): void {
    this.router.navigate([
      this.professor.id,
      "feedback",
    ])
  }

  public showImage(id:number):void {
    this.bugReportService.getBugReport(id).subscribe(bugReport => {
      this.bugReport = bugReport;
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(bugReport.image);
    });
  }

  public navigateToFeedbacks():void{
    this.router.navigate([
      this.professor.id,
      'feedbacks'
    ])
  }

  ngOnDestroy(): void {
    this.unsubscirbe!.unsubscribe();
  }
}
