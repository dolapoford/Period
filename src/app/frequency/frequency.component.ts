import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.css'
})
export class FrequencyComponent implements OnInit {
  @Input() formGroup!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'optionWeekly',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'onTheSelect',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'dateInput',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'ofeverySelect',
      this.fb.control('')
    );
   
    
  }

}
