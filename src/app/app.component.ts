import { Component , OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
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

  fieldsRepairForm: FormGroup= this.formBuilder.group({});;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fieldsRepairForm = this.formBuilder.group({
      documentForm:this.formBuilder.group({}),
      resortForm: this.formBuilder.group({}),
      amendmentForm: this.formBuilder.group({}),
      beneficiaryForm: this.formBuilder.group({}),
      frequencyForm: this.formBuilder.group({ }),
      periodForm: this.formBuilder.group({}),
      routingForm: this.formBuilder.group({})
    });
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
  onSubmit(): void {
    if (this.fieldsRepairForm.valid) {
      console.log('Form submitted successfully:', this.fieldsRepairForm.value);
    } else {
      console.log('Form is invalid');
      this.fieldsRepairForm.markAllAsTouched();
    }
  }
 }
