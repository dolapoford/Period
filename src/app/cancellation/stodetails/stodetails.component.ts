import { Component,Input } from '@angular/core';

export interface AccountDetails {
  debitAccountNumber: string;
  debitAccountTitle: string;
  currency: string;
  amount: number;
  standingOrderNumber: number;
  frequency: string;
  startDate: string;
  endDate: string;
  beneficiaryAccountNumber: string;
  beneficiaryAccountTitle: string;
  beneficiaryBank: string;
  paymentDetails: string;
}

@Component({
  selector: 'app-stodetails',
  templateUrl: './stodetails.component.html',
  styleUrl: './stodetails.component.css'
})
export class StodetailsComponent {
 
  @Input() data: AccountDetails | null = null;
  @Input() isVisible :boolean= false;
  

}
