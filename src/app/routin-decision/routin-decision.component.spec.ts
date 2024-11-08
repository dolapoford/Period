import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinDecisionComponent } from './routin-decision.component';

describe('RoutinDecisionComponent', () => {
  let component: RoutinDecisionComponent;
  let fixture: ComponentFixture<RoutinDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutinDecisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutinDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
