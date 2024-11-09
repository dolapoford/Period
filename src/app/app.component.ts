import { Component , OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

interface TableData {
  name: string;
  email: string;
  selected: boolean;
  [key: string]: string | boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fieldsRepairForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fieldsRepairForm = this.formBuilder.group({
      documentForm: this.formBuilder.group({
        docReference: ['', Validators.required],
        dcpRef: ['', Validators.required],
        createdDate: ['', Validators.required],
        businessUnit: [''],
        priority: [''],
        requestType: ['']
      }),
      resortForm: this.formBuilder.group({
        resortDocument: ['']
      }),
      amendmentForm: this.formBuilder.group({
        debitAccountNumber: ['', Validators.required],
        debitAccountTitle: ['', Validators.required],
        customerDetail: ['', Validators.required],
        sendSTO: [''],
        signatureVerified: ['']
      }),
      beneficiaryForm: this.formBuilder.group({
        creditBank: [''],
        creditAccountNumber: ['', Validators.required],
        accountName: ['', Validators.required],
        reference: ['', Validators.required],
        purposeCode: [''],
        transferCurrency: [''],
        amount: ['']
      }),
      frequencyForm: this.formBuilder.group({
        optionWeekly: [''],
        onTheSelect: [''],
        dateInput: ['', Validators.required],
        ofeverySelect: ['']
      }),
      periodForm: this.formBuilder.group({
        asForm: ['', Validators.required],
        lastPayment: ['', Validators.required]
      }),
      routingForm: this.formBuilder.group({
        routingDecision: [''],
        rejectionNote: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.fieldsRepairForm.valid) {
      console.log('Form submitted successfully:', this.fieldsRepairForm.value);
    } else {
      console.log('Form is invalid');
      this.fieldsRepairForm.markAllAsTouched();
    }
  }
 }
