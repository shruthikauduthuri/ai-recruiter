import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling'; 

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RecruiterComponent,
    ApplicantComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }