import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',  
  styleUrl: './period.component.css'
})
export class PeriodComponent  implements OnInit {
  @Input() formGroup!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
 this.createForm()
  }
  createForm(){
    this.formGroup.addControl(
      'asForm',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'lastPayment',
      this.fb.control('')
    );
    this.formGroup.addControl(
      'untilFurtherNotice',
      this.fb.control('')
    );
    
  }

}
