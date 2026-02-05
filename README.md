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
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=json-web-tokens)

<!-- **Database:**
![SQLite](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) -->

**Tools:**
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-black?style=for-the-badge&logo=husky&logoColor=white)
![Commitlint](https://img.shields.io/badge/Commitlint-gray?style=for-the-badge)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)

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
│   ├── config/                 # Configuration files (e.g., database connection)
│   ├── controllers/            # Request handlers for API endpoints
│   ├── middleware/             # Express middleware (e.g., authentication, error handling)
│   ├── models/                 # Mongoose schemas and models
│   ├── routes/                 # API route definitions
│   ├── services/               # Business logic and data manipulation
│   ├── utils/                  # Utility functions
│   └── index.ts                # Main entry point for the API
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

### Deployment Options

- **Cloud Platforms**: The built `dist` directory can be deployed to any Node.js compatible hosting service (e.g., Heroku, AWS EC2, Google Cloud Run, Vercel, Render). Ensure environment variables are configured in your deployment environment.
- **Docker**: A `Dockerfile` could be added for containerized deployments.

## 📚 API Reference

The API endpoints are designed to be intuitive and follow RESTful principles. All endpoints are secured with JWT authentication unless specified.

### Authentication

- Users must register (`POST /api/auth/register`) and log in (`POST /api/auth/login`) to obtain a JWT token.
- The JWT token must be included in the `Authorization` header of subsequent requests as a Bearer token: `Authorization: Bearer <your_jwt_token>`.

### Endpoints (Inferred)

#### Authentication

- **`POST /api/auth/register`**: Registers a new user.
- **`POST /api/auth/login`**: Authenticates a user and returns a JWT token.
- **`GET /api/auth/me`**: Retrieves the profile of the authenticated user. (Requires JWT)

#### Users

- **`GET /api/users`**: Get all users (Admin only).
- **`GET /api/users/:id`**: Get a user by ID.
- **`PUT /api/users/:id`**: Update user profile (User or Admin). (Requires JWT)

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

## 🤝 Contributing

We welcome contributions to the Learning Management System API! Please see our [Contributing Guide](CONTRIBUTING.md) (TODO: Create this file) for details on how to get started, report bugs, or suggest features.

### Development Setup for Contributors

Follow the [Quick Start](#quick-start) guide to set up your local development environment. Ensure you adhere to the project's linting and formatting rules.

## 📄 License

This project is currently unlicensed. Please refer to the repository's status for any future license updates or consider adding a specific license for clarity.

## 🙏 Acknowledgments

- The Node.js community for robust runtime.
- The TypeScript community for enhanced developer experience.
- Express.js and Mongoose for simplifying backend development.
- All contributors and users of this project.
