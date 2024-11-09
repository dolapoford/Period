import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-routin-decision',
  templateUrl: './routin-decision.component.html',
  styleUrl: './routin-decision.component.css'
})
export class RoutinDecisionComponent implements OnInit {
  @Input() formGroup!: FormGroup
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
