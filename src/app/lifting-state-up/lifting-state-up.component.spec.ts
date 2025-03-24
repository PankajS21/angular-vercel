import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingStateUpComponent } from './lifting-state-up.component';

describe('LiftingStateUpComponent', () => {
  let component: LiftingStateUpComponent;
  let fixture: ComponentFixture<LiftingStateUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiftingStateUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftingStateUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
