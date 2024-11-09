import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrl: './cancellation.component.css'
})
export class CancellationComponent implements OnInit {
  @Input() formGroup!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
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
   
  }

}
