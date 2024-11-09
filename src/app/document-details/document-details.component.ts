import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrl: './document-details.component.css'
})
export class DocumentDetailsComponent implements OnInit {
  @Input() formGroup!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'docReference',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'dcpRef',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'createdDate',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'businessUnit',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'priority',
      this.fb.control('')
    );

    this.formGroup.addControl(
      'requestType',
      this.fb.control('')
    );
    
  }
}
