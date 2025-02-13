# AI Recruiter Application - Frontend

This is the frontend part of the AI Recruiter application built using Angular. The application supports three roles: Admin, Recruiter, and Applicant.

## Project Structure

- **src/**: Contains the source code for the Angular application.
  - **app/**: Contains the main application components.
    - **admin/**: Contains components and logic for the Admin role.
    - **recruiter/**: Contains components and logic for the Recruiter role.
    - **applicant/**: Contains components and logic for the Applicant role.
  - **assets/**: Contains static assets like images and fonts.
  - **environments/**: Contains environment-specific configurations.
  - **index.html**: The main HTML file for the Angular application.
  - **main.ts**: The entry point for the Angular application.
  - **styles.css**: Global styles for the application.

## Features

- **Admin Role**: 
  - Manage recruiters (add/remove).
  
- **Recruiter Role**: 
  - View static applicant data on a dashboard.

- **Applicant Role**: 
  - Manage personal data and apply for positions.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory**:
   ```
   cd ai-recruiter/frontend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   ng serve
   ```

5. **Open your browser** and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.