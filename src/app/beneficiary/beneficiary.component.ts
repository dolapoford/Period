import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_CREDIT_BANK, SELECT_PURPOSE_CODE, SELECT_TRANSFER_CURRENCY } from '../constants';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrl: './beneficiary.component.css'
})
export class BeneficiaryComponent implements OnInit {
  @Input() formGroup!: FormGroup
  creditBankList:string[]=SELECT_CREDIT_BANK
  purposeCodeList:string[]=SELECT_PURPOSE_CODE
  transferCurrencyList:string[]=SELECT_TRANSFER_CURRENCY
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
