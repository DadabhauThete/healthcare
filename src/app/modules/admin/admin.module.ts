import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
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
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    SearchpatientComponent,
    PatientregistrationComponent,
    AddinsurancebenefitComponent,
    ViewinsurancebenefitComponent,
    PatientsummaryComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, NgbModule, FormsModule],
})
export class AdminModule {}
