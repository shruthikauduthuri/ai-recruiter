import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { InterviewSetupComponent } from './interview-setup/interview-setup.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewCompleteComponent } from './interview-complete/interview-complete.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'interview-setup', component: InterviewSetupComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'interview-complete', component: InterviewCompleteComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }