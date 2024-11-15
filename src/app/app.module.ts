import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ResortComponent } from "./resort/resort.component";
import { CancellationComponent } from './cancellation/cancellation.component';
import { StodetailsComponent } from './cancellation/stodetails/stodetails.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { PeriodComponent } from './period/period.component';
import { RoutinDecisionComponent } from './routin-decision/routin-decision.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    CancellationComponent,
    StodetailsComponent,
    DocumentDetailsComponent,
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
    ReactiveFormsModule
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
