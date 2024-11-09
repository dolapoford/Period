import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrl: './resort.component.css'
})
export class ResortComponent implements OnInit {
  @Input() formGroup!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'resortDocument',
      this.fb.control('')
    );
   
    
  }

}
