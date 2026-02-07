# Learning Management System API

## Overview

This repository hosts the backend API for a Learning Management System, designed to facilitate the creation, management, and delivery of educational content. Built with Node.js , express js and TypeScript, it provides a powerful and flexible foundation for managing users, courses, modules, lessons, and enrollment processes. The API ensures secure access through JWT-based authentication and leverages MongoDB for efficient data storage.

This project is ideal for developers looking to build a custom LMS frontend or integrate with existing educational platforms.

## Features

- **User Authentication & Authorization**: Secure registration, login, and role-based access control (e.g., Admin, Educator, Student) using JSON Web Tokens (JWT).
- **User Profile Management**: Functionality for users to view and update their profiles.
- **Course Management**: Comprehensive CRUD (Create, Read, Update, Delete) operations for courses, including details like title, description, instructor, and status.
- **Module & Lesson Management**: Organize course content into modules and individual lessons, supporting various content types.
- **Student Enrollment**: Allows students to enroll in and unenroll from courses.
- **Robust Data Storage**: Efficient and in memory data storage using SQLite Node.js.
- **Developer-Friendly**: Clean architecture, consistent code style enforced with ESLint and Prettier, and conventional commit messages.

## Tech Stack

**Backend:**
Node.js , Express.js, TypeScript, JWT

**Database:**
SQLite Node.js

**Tools:**
npm, ESLint, Prettier, Husky, Commitlint, Nodemon

## Quick Start

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

