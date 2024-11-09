import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_STO_OPTIONS } from '../constants';
import { AccountDetails } from './stodetails/stodetails.component';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrl: './cancellation.component.css'
})
export class CancellationComponent implements OnInit {
  @Input() formGroup!: FormGroup
  stoOptionList:string[] =SELECT_STO_OPTIONS
  detailVisible:boolean=false
  otherFormControlVisible:boolean=false
  accountData: AccountDetails = {
    debitAccountNumber: '000044556677',
    debitAccountTitle: 'Ms. Eila Fitz',
    currency: 'MUR',
    amount: 2000.00,
    standingOrderNumber: 2,
    frequency: 'Monthly on Day 1',
    startDate: '20240801',
    endDate: '20241231',
    beneficiaryAccountNumber: '000044889900',
    beneficiaryAccountTitle: 'Ms. Eila Fitz',
    beneficiaryBank: 'The Mauritius Commercial Bank Ltd',
    paymentDetails: '2998'
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  showDtails(){
    if(this.formGroup.get('sendSTO')?.value){
      this.detailVisible=true
    }else{
      this.detailVisible=false
    }
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
  onDebitAccountBlur() {
    const accountNumber = this.formGroup.get('debitAccountNumber')?.value;
    if(accountNumber){
      this.otherFormControlVisible=true 
    this.formGroup?.patchValue({
      sendSTO: "123443948",
      customerDetail: "odofin Oyejide",
      debitAccountTitle: "Mcb Limited",
    })
    }else{
      this.otherFormControlVisible=false 
      this.formGroup?.reset()
    }
   
  
  }
  get signatureVerified(): FormGroup {
    return this.formGroup.get('signatureVerified') as FormGroup;
  }

 
}
