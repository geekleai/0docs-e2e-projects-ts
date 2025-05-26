# Node.js CRM Application

This project is a Customer Relationship Management (CRM) system built using Node.js and TypeScript. 

The application provides a RESTful API for managing customers, leads, opportunities, and contacts. It includes features such as:

- Creating, retrieving, updating, and deleting customers, leads, opportunities, and contacts.
- Dashboard statistics and health checks.
- Validation of input data using schemas.

## Project Structure

- **src/**: Contains the main application code.
  - **app.ts**: Entry point of the application.
  - **models/**: Contains model definitions.
  - **routes/**: Contains route definitions for handling API requests.
  - **schemas/**: Contains schema definitions for data validation.
  - **services/**: Contains service classes for business logic.
  - **types/**: Contains custom types and interfaces.

- **tests/**: Contains unit tests for the application.

- **package.json**: Configuration file for npm.

- **tsconfig.json**: Configuration file for TypeScript.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-crm-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

5. Run the tests:
   ```
   npm test
   ```

## License

This project is licensed under the MIT License.