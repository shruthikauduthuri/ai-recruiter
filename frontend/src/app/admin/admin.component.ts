
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    standalone: false
})
export class AdminComponent implements OnInit {
  // Sample data - replace with actual data from your service
  totalUsers: number = 150;
  activeJobs: number = 25;
  totalApplications: number = 324;
  interviewsScheduled: number = 48;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize data from your service
  }

  navigateToUsers(): void {
    this.router.navigate(['/admin/users']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/admin/jobs']);
  }

  navigateToSettings(): void {
    this.router.navigate(['/admin/settings']);
  }

  navigateToReports(): void {
    this.router.navigate(['/admin/reports']);
  }
}

