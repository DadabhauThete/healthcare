import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchpatientComponent } from './components/searchpatient/searchpatient.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientregistrationComponent } from './components/patientregistration/patientregistration.component';
import { AddinsurancebenefitComponent } from './components/addinsurancebenefit/addinsurancebenefit.component';
import { ViewinsurancebenefitComponent } from './components/viewinsurancebenefit/viewinsurancebenefit.component';
import { PatientsummaryComponent } from './components/patientsummary/patientsummary.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    SearchpatientComponent,
    PatientregistrationComponent,
    AddinsurancebenefitComponent,
    ViewinsurancebenefitComponent,
    PatientsummaryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
