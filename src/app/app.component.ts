import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fieldsRepairForm: FormGroup = this.formBuilder.group({});;
  instructionVisisble: boolean = true;
  resortVisible: boolean = false;
  amendmentsVisible: boolean = false;
  beneficiaryVisible: boolean = false;
  frequencyVisible: boolean = false;
  periodVisible: boolean = false;
  routingDecisionVisible: boolean = false
  supportingDocumentVisible: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fieldsRepairForm = this.formBuilder.group({
      documentForm: this.formBuilder.group({}),
      resortForm: this.formBuilder.group({}),
      amendmentForm: this.formBuilder.group({}),
      beneficiaryForm: this.formBuilder.group({}),
      frequencyForm: this.formBuilder.group({}),
      periodForm: this.formBuilder.group({}),
      routingForm: this.formBuilder.group({})
    });
  }
  get requestType() {
    return this.documentForm?.get('requestType')
  }
  get documentForm(): FormGroup {
    return this.fieldsRepairForm.get('documentForm') as FormGroup;
  }
  get periodForm(): FormGroup {
    return this.fieldsRepairForm.get('periodForm') as FormGroup;
  }
  get resortForm(): FormGroup {
    return this.fieldsRepairForm.get('resortForm') as FormGroup;
  }
  get amendmentForm(): FormGroup {
    return this.fieldsRepairForm.get('amendmentForm') as FormGroup;
  }
  get beneficiaryForm(): FormGroup {
    return this.fieldsRepairForm.get('beneficiaryForm') as FormGroup;
  }
  get routingForm(): FormGroup {
    return this.fieldsRepairForm.get('routingForm') as FormGroup;
  }
  get frequencyForm(): FormGroup {
    return this.fieldsRepairForm.get('frequencyForm') as FormGroup;
  }
  onRequestTypeChange(value: string) {
    if (value == 'Resort') {
      this.resortVisible = true
      this.amendmentsVisible = false;
      this.beneficiaryVisible = false;
      this.frequencyVisible = false;
      this.periodVisible = false;
      this.routingDecisionVisible = false
      this.supportingDocumentVisible=false;
    }else if(value == 'Ammendment'){
      this.resortVisible = false
      this.amendmentsVisible=true;
      this.beneficiaryVisible = false;
      this.frequencyVisible = false;
      this.periodVisible = false;
      this.routingDecisionVisible = false
      this.supportingDocumentVisible=false;
    } else if(value == 'Setup'){
      this.resortVisible = true
      this.amendmentsVisible=true;
      this.beneficiaryVisible = true;
      this.frequencyVisible = true;
      this.periodVisible = true;
      this.routingDecisionVisible = true
      this.supportingDocumentVisible=true;
    }
  }
  onSubmit(): void {
    if (this.fieldsRepairForm.valid) {
      console.log(this.requestType?.value)
    } else {
      console.log('Form is invalid');
      this.fieldsRepairForm.markAllAsTouched();
    }
  }
}
