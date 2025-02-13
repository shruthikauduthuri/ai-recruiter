# AI Interviewer Application

This project is a MEAN stack application designed for an AI Interviewer platform with three distinct roles: Admin, Recruiter, and Applicant. The application allows for efficient management of recruitment processes and applicant data.

## Project Structure

```
ai-recruiter
├── backend
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── recruiterController.js
│   │   └── applicantController.js
│   ├── models
│   │   ├── admin.js
│   │   ├── recruiter.js
│   │   └── applicant.js
│   ├── routes
│   │   ├── adminRoutes.js
│   │   ├── recruiterRoutes.js
│   │   └── applicantRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── admin
│   │   │   │   ├── admin.component.html
│   │   │   │   ├── admin.component.ts
│   │   │   │   └── admin.component.css
│   │   │   ├── recruiter
│   │   │   │   ├── recruiter.component.html
│   │   │   │   ├── recruiter.component.ts
│   │   │   │   └── recruiter.component.css
│   │   │   ├── applicant
│   │   │   │   ├── applicant.component.html
│   │   │   │   ├── applicant.component.ts
│   │   │   │   └── applicant.component.css
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   └── app-routing.module.ts
│   │   ├── assets
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── package.json
├── README.md
└── .gitignore
```

## Features

- **Admin Role**: 
  - Manage recruiters (add, remove).
  - View and manage all applicants.

- **Recruiter Role**: 
  - Access a dashboard displaying static applicant data.
  - View applicant profiles and statuses.

- **Applicant Role**: 
  - Submit applications.
  - View application status.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Angular CLI

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-interviewer
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node app.js
   ```

2. Start the frontend application:
   ```
   cd frontend
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.