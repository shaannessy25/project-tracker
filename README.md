# Project Tracker
<!-- ![Build Status](https://img.shields.io/travis/shaannessy25/project-tracker.svg) -->

The Project Tracker is a web application designed to streamline project and task management. It provides essential features for creating, updating, and deleting projects and tasks, along with user authentication.

## Key Features

- **User Authentication**: Securely register, log in, and manage user accounts.
- **Project Management**: Create new projects, view existing projects, and delete projects as needed.
- **Task Tracking**: Add tasks to projects, monitor their progress, and mark them as completed.
- **Efficient Collaboration**: Enable teams to work together by assigning tasks and tracking project status.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated applications.
- **Prisma**: An ORM (Object-Relational Mapping) tool for database access and management.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A statically typed superset of JavaScript that enhances code scalability and maintainability.

## Prerequisites

- Node.js version 16 or later (preferably 18) installed on your system.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project's root directory.
3. Create an `.env` file and provide the following environment variables:

   ```plaintext
   COOKIE_NAME=<your_cookie_name>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Install the required dependencies by running the following command:

   ```plaintext
   npm install
   ```

## Usage
To start the development server, run the following command:

   ```plaintext
   npm run dev
   ```
the application will be accessible at http://localhost:3000

## Known Issues and Limitations
* Deleting taks functionality is currently not implemented
* Sidebar links are not connected to their respective routes