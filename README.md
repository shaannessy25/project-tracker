# Project Tracker
<!-- ![Build Status](https://img.shields.io/travis/shaannessy25/project-tracker.svg) -->

The Project Tracker is a web application designed to streamline project and task management. It provides essential features for creating, updating, and deleting projects and tasks, along with user authentication.

## Design and Architecture

The project is built using Next.js, Tailwind CSS, and Prisma. Here are some details about the design and architecture:

- **Architecture**: The project follows a monolithic architecture, where the front-end and back-end components are combined into a single application.

- **Components**: The project's front-end is organized within the `app` folder. The `components` folder contains reusable UI components.

- **Pages**: The application's pages are stored in the `app/pages` directory. The `app/pages/api` folder contains API routes used for server-side functionality.

- **Database**: The project utilizes Prisma as the ORM (Object-Relational Mapping) tool to manage database operations. The database is hosted on Railway, a database-as-a-service platform.

- **Package Dependencies**: The project's `package.json` file contains the necessary dependencies and devDependencies for the application. Notable dependencies include Next.js, React, Prisma, Tailwind CSS, and TypeScript.


## Key Features

- **User Authentication**: Securely register, log in, and manage user accounts.
- **Project Management**: Create new projects, view existing projects, and delete projects as needed.
- **Task Tracking**: Create/Delete projects, add tasks to projects, monitor their progress
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
   DATABASE_URL="postgresql://postgres:sNLDJZMHevxNBtoUdt6h@containers-us-west-15.railway.app:6188/railway?schema=public"
   COOKIE_NAME=<your_cookie_name>
   JWT_SECRET=<your_jwt_secret>
v
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

## Demo


https://github.com/shaannessy25/project-tracker/assets/47993680/9e4922c0-cf20-46fb-92b1-14125069f344



## Known Issues and Limitations
* Deleting taks functionality is currently not implemented
* Sidebar links are not connected to their respective routes
