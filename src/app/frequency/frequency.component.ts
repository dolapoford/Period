import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_OF_EVERY, SELECT_ON_THE, SELECT_WEEKLY_OPTIONS } from '../constants';
@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.css'
})
export class FrequencyComponent implements OnInit {
  @Input() formGroup!: FormGroup
  weeklyOptionList:string[] =SELECT_WEEKLY_OPTIONS
  onTheList:string[]=SELECT_ON_THE
  ofEveryList:string[] =SELECT_OF_EVERY
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
    this.formGroup.addControl(
      'weekly',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'monthly',
      this.fb.control('')
    );
   
    
  }

}
