import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVariableComponent } from './contextual-variable.component';

describe('ContextualVariableComponent', () => {
  let component: ContextualVariableComponent;
  let fixture: ComponentFixture<ContextualVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVariableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
