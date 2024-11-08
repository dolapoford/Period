import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StodetailsComponent } from './stodetails.component';

describe('StodetailsComponent', () => {
  let component: StodetailsComponent;
  let fixture: ComponentFixture<StodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
