import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCompleteComponent } from './interview-complete.component';

describe('InterviewCompleteComponent', () => {
  let component: InterviewCompleteComponent;
  let fixture: ComponentFixture<InterviewCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
