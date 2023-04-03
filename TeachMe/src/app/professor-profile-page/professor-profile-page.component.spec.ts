import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorProfilePageComponent } from './professor-profile-page.component';

describe('ProfessorProfilePageComponent', () => {
  let component: ProfessorProfilePageComponent;
  let fixture: ComponentFixture<ProfessorProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
