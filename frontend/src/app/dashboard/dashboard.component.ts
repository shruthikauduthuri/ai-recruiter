import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent {

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}