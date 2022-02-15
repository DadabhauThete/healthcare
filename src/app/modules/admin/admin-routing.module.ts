import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchpatientComponent } from './components/searchpatient/searchpatient.component';
import { PatientregistrationComponent } from './components/patientregistration/patientregistration.component';
import { AddinsurancebenefitComponent } from './components/addinsurancebenefit/addinsurancebenefit.component';
import { ViewinsurancebenefitComponent } from './components/viewinsurancebenefit/viewinsurancebenefit.component';
import { PatientsummaryComponent } from './components/patientsummary/patientsummary.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search-patient', component: SearchpatientComponent },
      { path: 'register-patient', component: PatientregistrationComponent },
      {
        path: 'add-insurance-benefit',
        component: AddinsurancebenefitComponent,
      },
      {
        path: 'view-insurance-benefit',
        component: ViewinsurancebenefitComponent,
      },
      {
        path: 'patient-summary',
        component: PatientsummaryComponent,
      },
      { path: '', redirectTo: '/admin/search-patient', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
