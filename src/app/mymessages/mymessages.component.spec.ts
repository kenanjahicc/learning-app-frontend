import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymessagesComponent } from './mymessages.component';

describe('MymessagesComponent', () => {
  let component: MymessagesComponent;
  let fixture: ComponentFixture<MymessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
