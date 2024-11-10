import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SELECT_OF_EVERY, SELECT_ON_THE, SELECT_WEEKLY_OPTIONS } from '../constants';
@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.css'
})
export class FrequencyComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  weeklyOptionList: string[] = SELECT_WEEKLY_OPTIONS;
  onTheList: string[] = SELECT_ON_THE;
  ofEveryList: string[] = SELECT_OF_EVERY;
  isWeeklyVisible: boolean = false;
  isMonthlyVisible: boolean=false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.onFrequencyTypeChange();
    this.onOnTheSelectChange()
  }

  createForm() {
    // Check if formGroup is defined before adding controls
    if (this.formGroup) {
      this.formGroup.addControl('frequencyType', this.fb.control(''));
      this.formGroup.addControl('optionWeekly', this.fb.control(''));
      this.formGroup.addControl('onTheSelect', this.fb.control(''));
      this.formGroup.addControl('dateInput', this.fb.control(''));
      this.formGroup.addControl('ofeverySelect', this.fb.control(''));
    }
  }

  onFrequencyTypeChange() {
    this.formGroup.get('frequencyType')?.valueChanges.subscribe((value: string) => {
      if (value === 'week') {
        this.isWeeklyVisible = true;
        this.isMonthlyVisible = false;
      } else if (value === 'month') {
        this.isWeeklyVisible = false;
        this.isMonthlyVisible = true;
      } else {
        this.isWeeklyVisible = false;
        this.isMonthlyVisible = false;
      }
    });


    // if(this.onTheSelect?.value=='Last' || this.onTheSelect?.value=='First'){
    //   this.dateInput?.disable
    // }
  }

  onOnTheSelectChange() {
    this.formGroup.get('onTheSelect')?.valueChanges.subscribe((value: string) => {
      if (value === 'Last' || value === 'First') {
        this.dateInput?.disable();
      } else {
        this.dateInput?.enable();
      }
    });
  }

  get dateInput() {
    return this.formGroup?.get('dateInput');
  }
  get onTheSelect(){
    return this.formGroup?.get('onTheSelect');
  }
}
