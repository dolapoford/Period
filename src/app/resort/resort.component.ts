import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SELECT_RESORT_OPTIONS } from '../constants';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrl: './resort.component.css'
})
export class ResortComponent implements OnInit {
  @Input() formGroup!: FormGroup
  resortList:string[]= SELECT_RESORT_OPTIONS
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    if(this.formGroup){
      this.formGroup.addControl(
        'resortDocument',
        this.fb.control('')
      );
     
      
    }
  }

}
