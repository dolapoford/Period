import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrl: './beneficiary.component.css'
})
export class BeneficiaryComponent implements OnInit {
  @Input() formGroup!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'creditBank',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'creditAccountNumber',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'accountName',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'reference',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'purposeCode',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'transferCurrency',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'amount',
      this.fb.control('')
    );
    
  }

}
