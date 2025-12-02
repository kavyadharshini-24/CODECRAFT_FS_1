# User Authentication Project

This project implements a user authentication system with secure login and registration functionality. Users can sign up for an account, log in securely, and access protected routes only after successful authentication.

## Features

- User registration with email and password
- Secure login with JWT authentication
- Protected routes accessible only to authenticated users
- Error handling middleware
- Unit tests for authentication and user functionality

## Technologies Used

- TypeScript
- Express.js
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Jest for testing

## Project Structure

```
user-auth-project
├── src
│   ├── index.ts                # Entry point of the application
│   ├── app.ts                  # Express application setup
│   ├── controllers             # Controllers for handling requests
│   ├── routes                  # Route definitions
│   ├── middleware              # Middleware functions
│   ├── services                # Business logic for authentication and user management
│   ├── models                  # User model definition
│   ├── repositories            # Database operations related to users
│   ├── utils                   # Utility functions for JWT and password hashing
│   ├── config                  # Configuration settings
│   └── types                   # TypeScript interfaces and types
├── tests                       # Unit tests for authentication and user functionality
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
├── .env.example                # Example of environment variables
├── jest.config.js             # Jest configuration for testing
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-auth-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables.

4. Run the application:
   ```
   npm start
   ```

5. Run tests:
   ```
   npm test
   ```

## Usage

- To register a new user, send a POST request to `/api/auth/register` with the user's email and password.
- To log in, send a POST request to `/api/auth/login` with the user's credentials.
- Access protected routes by including the JWT in the Authorization header.

## License

This project is licensed under the MIT License.