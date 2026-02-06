# 📚 Learning Management System API

## 📖 Overview

This repository hosts the backend API for a Learning Management System, designed to facilitate the creation, management, and delivery of educational content. Built with Node.js , express js and TypeScript, it provides a powerful and flexible foundation for managing users, courses, modules, lessons, and enrollment processes. The API ensures secure access through JWT-based authentication and leverages MongoDB for efficient data storage.

This project is ideal for developers looking to build a custom LMS frontend or integrate with existing educational platforms.

## ✨ Features

- **User Authentication & Authorization**: Secure registration, login, and role-based access control (e.g., Admin, Educator, Student) using JSON Web Tokens (JWT).
- **User Profile Management**: Functionality for users to view and update their profiles.
- **Course Management**: Comprehensive CRUD (Create, Read, Update, Delete) operations for courses, including details like title, description, instructor, and status.
- **Module & Lesson Management**: Organize course content into modules and individual lessons, supporting various content types.
- **Student Enrollment**: Allows students to enroll in and unenroll from courses.
- **Robust Data Storage**: Efficient and in memory data storage using SQLite Node.js.
- **Developer-Friendly**: Clean architecture, consistent code style enforced with ESLint and Prettier, and conventional commit messages.

## 🛠️ Tech Stack

**Backend:**
Node.js , Express.js, TypeScript, JWT

**Database:**
SQLite Node.js

**Tools:**
npm, ESLint, Prettier, Husky, Commitlint, Nodemon

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Node Package Manager, comes with Node.js.

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Ashminita28/learning-management-system-api.git
    cd learning-management-system-api
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment setup**
    Create a `.env` file in the root directory by copying `.env.example` (if available, otherwise create it manually):

    ```bash
    cp .env.example .env # If .env.example exists
    # Or manually create .env
    ```

    Configure your environment variables in `.env`:

    | Variable         | Description                                 | Required |
    | ---------------- | ------------------------------------------- | -------- |
    | `PORT`           | Port number for the API server              | No       |
    | `JWT_SECRET`     | Secret key for signing and verifying JWTs   | Yes      |
    | `JWT_EXPIRATION` | Expiration time for JWTs (e.g., `1d`, `7h`) | No       |

    _Example `.env` content:_

    ```
    PORT=5000
    JWT_SECRET=your_super_secret_jwt_key
    JWT_EXPIRATION=1h
    ```

4.  **Start development server**
    ```bash
    npm run dev
    ```
    The API will be accessible at `http://localhost:5000` (or your specified `PORT`).

## 📁 Project Structure

```
learning-management-system-api/
├── src/                        # Main application source code
│   ├── app.ts                 # Main entry point for the routes
│   ├── controllers/            # Request handlers for API endpoints
│   ├── middleware/             # Express middleware (e.g., authentication, error handling)
│   ├── models/                 # Mongoose schemas and models
│   ├── routes/                 # API route definitions
│   ├── services/               # Business logic and data manipulation
│   ├── utils/                  # Utility functions
│   └── server.ts                # Main entry point for the API
├── .husky/                     # Git hooks configuration (pre-commit, commit-msg)
├── .commitlintric.json         # Commitlint configuration (for conventional commits)
├── commitlint.config.js        # Commitlint configuration
├── .eslintrc.json              # ESLint configuration for code quality
├── eslint.config.js            # ESLint configuration
├── .gitignore                  # Specifies intentionally untracked files
├── .prettierignore             # Specifies files to ignore from Prettier formatting
├── .prettierrc                 # Prettier configuration for code formatting
├── package.json                # Project metadata, scripts, and dependencies
├── package-lock.json           # Exact dependency versions managed by npm
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project README documentation
```

## ⚙️ Configuration

### Environment Variables

As described in the [Installation](#environment-setup) section, the API uses environment variables for sensitive data and configurable settings.

### Configuration Files

- `.eslintrc.json`, `eslint.config.js`: Define linting rules to maintain code quality.
- `.prettierrc`, `.prettierignore`: Configure code formatting rules for consistency.
- `commitlint.config.js`, `.commitlintric.json`: Enforce conventional commit message standards.
- `tsconfig.json`: TypeScript compiler options for the project.

## 🔧 Development

### Available Scripts

The `package.json` includes several scripts for development and maintenance:

| Command            | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| `npm run dev`      | Starts the development server with `nodemon` for hot-reloading.         |
| `npm run start`    | Builds and starts the API in production mode.                           |
| `npm run build`    | Compiles TypeScript source files to JavaScript in the `dist` directory. |
| `npm run lint`     | Runs ESLint to check for code style and quality issues.                 |
| `npm run lint:fix` | Runs ESLint and automatically fixes fixable issues.                     |
| `npm run format`   | Formats all TypeScript files using Prettier.                            |
| `npm run prepare`  | Sets up Husky Git hooks (e.g., `pre-commit`, `commit-msg`).             |

### Development Workflow

1.  Ensure prerequisites (Node.js, MongoDB) are installed and MongoDB is running.
2.  Clone the repository and install dependencies (`npm install`).
3.  Set up your `.env` file.
4.  Start the development server using `npm run dev`.
5.  Develop new features, ensuring code adheres to linting and formatting standards (run `npm run lint:fix` and `npm run format` regularly).
6.  Commit changes using conventional commit messages (enforced by `husky` and `commitlint`).

## 🚀 Deployment

### Production Build

To prepare the API for production, build the TypeScript code:

```bash
npm run build
```

This will compile all `.ts` files from `src` into a `dist` directory.

### Running in Production

Once built, you can start the API using:

```bash
npm start
```

This command runs the compiled JavaScript code, typically found in `dist/server.js`.

## 📚 API Reference

The API endpoints are designed to be intuitive and follow RESTful principles. All endpoints are secured with JWT authentication unless specified.

### Authentication

- Users must register (`POST /api/auth/register`) and log in (`POST /api/auth/login`) to obtain a JWT token.
- The JWT token must be included in the `Authorization` header of subsequent requests as a Bearer token: `Authorization: Bearer <your_jwt_token>`.

### Endpoints (Inferred)

#### Authentication

- **`POST /api/auth/register`**: Registers a new user.
- **`POST /api/auth/login`**: Authenticates a user and returns a JWT token.

#### Users

- **`GET /api/users`**: Get all users (Admin only).
- **`GET /api/users/me`**: Get self data (by using access token).
- **`GET /api/users/:id`**: Get a user by ID.(Admin only).
- **`PUT /api/users/me`**: Update self profile.(Requires JWT)
- **`DELETE /api/users/:id`**: Delete user data by Id.(Admin Only)

#### Courses

- **`POST /api/courses`**: Create a new course (Instructor/Admin only). (Requires JWT)
- **`GET /api/courses`**: Get all courses.
- **`GET /api/courses/:id`**: Get a course by ID.
- **`PUT /api/courses/:id`**: Update a course by ID (Instructor/Admin only). (Requires JWT)
- **`DELETE /api/courses/:id`**: Delete a course by ID (Admin only). (Requires JWT)

#### Modules & Lessons

- **`POST /api/courses/:courseId/modules`**: Add a module to a course (Instructor/Admin only). (Requires JWT)
- **`POST /api/modules/:moduleId/lessons`**: Add a lesson to a module (Instructor/Admin only). (Requires JWT)
- (And corresponding GET, PUT, DELETE endpoints for modules and lessons within courses.)

#### Enrollments

- **`POST /api/enrollments`**: Enroll a student in a course (Student only). (Requires JWT)
- **`GET /api/enrollments/my-courses`**: Get courses a student is enrolled in (Student only). (Requires JWT)
- **`DELETE /api/enrollments/:id`**: Unenroll a student from a course. (Requires JWT)
