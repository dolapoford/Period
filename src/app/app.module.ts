import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ResortComponent } from "./resort/resort.component";
import { CancellationComponent } from './cancellation/cancellation.component';
import { CancellationCustomerDetailComponent } from './cancellation/cancellation-customer-detail/cancellation-customer-detail.component';
import { SignatureComponent } from './cancellation/signature/signature.component';
import { StodetailsComponent } from './cancellation/stodetails/stodetails.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { PeriodComponent } from './period/period.component';
import { RoutinDecisionComponent } from './routin-decision/routin-decision.component';
@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    CancellationComponent,
    CancellationCustomerDetailComponent,
    SignatureComponent,
    StodetailsComponent,
    BeneficiaryComponent,
    FrequencyComponent,
    PeriodComponent,
    RoutinDecisionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
