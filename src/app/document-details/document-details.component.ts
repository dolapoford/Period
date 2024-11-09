import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_BUSINESS_UNITS, SELECT_PRIORITY,SELECT_REQUEST_TYPE } from '../constants';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrl: './document-details.component.css'
})
export class DocumentDetailsComponent implements OnInit {
  @Input() formGroup!: FormGroup
  @Output() requestTypeChange = new EventEmitter<string>();
  priorityList:string[] = SELECT_PRIORITY
  businessUnitList: string[] =SELECT_BUSINESS_UNITS
  requestTypeList:string[] =SELECT_REQUEST_TYPE
  constructor(private fb: FormBuilder) {}
   
  ngOnInit(): void {
 this.createForm()
 this.listenToRequestTypeChange();
  }
  listenToRequestTypeChange() {
    const requestTypeControl = this.formGroup?.get('requestType');
    if (requestTypeControl) {
      requestTypeControl.valueChanges.subscribe((value) => {
        this.requestTypeChange.emit(value);
      });
    }
  }
  createForm(){
   if(this.formGroup){
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
}
