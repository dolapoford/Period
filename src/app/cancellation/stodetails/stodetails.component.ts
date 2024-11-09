import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-stodetails',
  templateUrl: './stodetails.component.html',
  styleUrl: './stodetails.component.css'
})
export class StodetailsComponent {
 
  @Input() data :any;
  @Input() isVisible :boolean= false;
  

}
