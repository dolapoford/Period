import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_REASON_OPTION } from '../constants';

@Component({
  selector: 'app-routin-decision',
  templateUrl: './routin-decision.component.html',
  styleUrl: './routin-decision.component.css'
})
export class RoutinDecisionComponent implements OnInit {
  @Input() formGroup!: FormGroup
  reasonOptionList:string[] =SELECT_REASON_OPTION
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'routingDecision',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'rejectionNote',
      this.fb.control('')
    );
   
  }

}
