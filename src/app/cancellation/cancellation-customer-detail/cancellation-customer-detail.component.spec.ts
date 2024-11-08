import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationCustomerDetailComponent } from './cancellation-customer-detail.component';

describe('CancellationCustomerDetailComponent', () => {
  let component: CancellationCustomerDetailComponent;
  let fixture: ComponentFixture<CancellationCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellationCustomerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancellationCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
