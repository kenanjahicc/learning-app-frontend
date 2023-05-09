import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Professor} from "../../models/professor.model";

@Component({
  selector: 'app-professors-page',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit, OnDestroy {

  private professor: Professor | undefined;
  private unsubscirbe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.unsubscirbe = this.activatedRoute.data.subscribe((data) => {
      this.professor = data['professor'];
    })
  }

  public navigateToProfessor(): void {
    this.router.navigate([
      "professorPage",
      this.professor?.id
    ])
  }

  ngOnDestroy(): void {
    this.unsubscirbe!.unsubscribe();
  }
}
