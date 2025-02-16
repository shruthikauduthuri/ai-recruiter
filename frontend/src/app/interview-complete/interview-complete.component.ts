import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-complete',
  template: `
    <div class="complete-container">
      <h2>Interview Complete!</h2>
      <p>Thank you for completing the interview. We will review your responses and get back to you soon.</p>
      <button (click)="returnToDashboard()">Return to Dashboard</button>
    </div>
  `,
  styles: [`
    .complete-container {
      max-width: 600px;
      margin: 4rem auto;
      text-align: center;
      padding: 2rem;
    }
    button {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class InterviewCompleteComponent {
  constructor(private router: Router) {}

  returnToDashboard() {
    this.router.navigate(['/applicant']);
  }
}
