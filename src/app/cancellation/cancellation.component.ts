import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_STO_OPTIONS } from '../constants';


@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrl: './cancellation.component.css'
})
export class CancellationComponent implements OnInit {
  @Input() formGroup!: FormGroup
  stoOptionList:string[] =SELECT_STO_OPTIONS
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    
    this.formGroup.addControl(
      'signatureVerified',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'debitAccountNumber',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'debitAccountTitle',
      this.fb.control('')
    );

    this.formGroup.addControl(
      'customerDetail',
      this.fb.control('')
    );

    this.formGroup.addControl(
      'sendSTO',
      this.fb.control('')
    );
   
    this.formGroup.addControl(
      'signatureVerified',
      this.fb.control('')
    );

    this.formGroup.addControl(
      'cancelStandingOrder',
      this.fb.control('')
    );
   
  }
  get signatureVerified(): FormGroup {
    return this.formGroup.get('signatureVerified') as FormGroup;
  }
}
