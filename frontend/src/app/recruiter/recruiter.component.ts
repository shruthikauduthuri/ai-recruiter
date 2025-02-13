import { Component, OnInit } from '@angular/core';

interface Applicant {
  applicant_id: number;
  name: string;
  email: string;
  position: string;
  experience: number;
  status: string;
}

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.css'],
    standalone: false
})
export class RecruiterComponent {
  applicants: Applicant[] = [];

  ngOnInit() {
    this.applicants = [
      { applicant_id: 1,
        name: 'John Doe', 
        email: 'john.doe@example.com', 
        position: 'Angular Developer',
        experience: 3,
        status: 'Interview Scheduled' 
      },
      { applicant_id: 2,
        name: 'Jane Smith', 
        email: 'jane.smith@example.com', 
        position: 'Mobile Developer',
        experience: 2,
        status: 'Application Reviewed' 
      },
      { applicant_id: 3,
        name: 'Emily Johnson', 
        email: 'emily.johnson@example.com', 
        position: 'Java Developer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 4,
        name: 'Alex Ghasemi', 
        email: 'alex.ghasemi@example.com', 
        position: 'DevOps Engineer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 5,
        name: 'Ethan Nguyen', 
        email: 'ethan.nguyen@example.com', 
        position: 'Data Analyst',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 6,
        name: 'Sarah Amos', 
        email: 'emily.johnson@example.com', 
        position: 'Java Fullstack Developer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 7,
        name: 'Chantè Evans', 
        email: 'chantè.evans@example.com', 
        position: 'Java Fullstack Developer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 8,
        name: 'Evan Mike', 
        email: 'evan.mike@example.com', 
        position: 'Java Fullstack Developer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 9,
        name: 'Sam Scott', 
        email: 'sam.scott@example.com', 
        position: 'Java Fullstack Developer',
        experience: 4,
        status: 'Application Under Review' 
      },
      { applicant_id: 10,
        name: 'Conner Summers', 
        email: 'conner.summers@example.com', 
        position: 'Java Fullstack Developer',
        experience: 4,
        status: 'Application Under Review' 
      }
    ];
  }
}