import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Feedback} from "../../models/feedback.model";
import {Professor} from "../../models/professor.model";

@Component({
  selector: 'app-professor-profile-page',
  templateUrl: './professor-profile-page.component.html',
  styleUrls: ['./professor-profile-page.component.css']
})
export class ProfessorProfilePageComponent implements OnInit, OnDestroy{
  private professor: Professor | undefined;
  private unsubscirbe: Subscription | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscirbe = this.activatedRoute.data.subscribe((data) =>{
      this.professor = data['professor'];
    })
  }

  public navigateToFeedback(): void{
    this.router.navigate([
      this.professor?.id,
      "feedback"
    ])
  }

  ngOnDestroy(): void {
    this.unsubscirbe!.unsubscribe();
  }
}
