import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveProfileComponent } from './leave-profile.component';

describe('LeaveProfileComponent', () => {
  let component: LeaveProfileComponent;
  let fixture: ComponentFixture<LeaveProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
