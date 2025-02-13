import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'recruiter', component: RecruiterComponent },
    { path: 'applicant', component: ApplicantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }