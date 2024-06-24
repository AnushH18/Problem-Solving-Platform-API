# Problem Management API

This repository contains the code for a Problem Management API built using Node.js, Express, and MongoDB. The API provides endpoints to create, read, update, and delete problems, along with handling errors and database connections.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Database Configuration](#database-configuration)
- [Logging](#logging)
- [Environment Variables](#environment-variables)
- [Contact](#contact)

## Getting Started

Follow the instructions below to set up and run the API on your local machine.

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (either local or Atlas)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/problem-management-api.git
    cd problem-management-api
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Server

1. Create a `.env` file in the root directory and configure the following environment variables:

    ```
    PORT=3000
    ATLAS_DB_URL=your_mongodb_connection_string
    NODE_ENV=development
    ```

2. Start the server:

    ```sh
    npm start
    ```

The server should be running on the specified port (e.g., `http://localhost:3000`).

## API Endpoints

All API routes are prefixed with `/api`.

### Version 1 Endpoints

- `GET /api/v1/ping`: Returns "in v1 route".
- `GET /api/v1/problems/ping`: Returns "Problem controller is up".
- `GET /api/v1/problems`: Retrieves all problems.
- `GET /api/v1/problems/:id`: Retrieves a specific problem by ID.
- `POST /api/v1/problems/create`: Creates a new problem.
- `PUT /api/v1/problems/:id`: Updates an existing problem by ID.
- `DELETE /api/v1/problems/:id`: Deletes a problem by ID.

## Project Structure

```sh
.
├── src
│   ├── config
│   │   ├── db.config.js
│   │   ├── logger.config.js
│   │   └── server.config.js
│   ├── controllers
│   │   └── problems.controllers.js
│   ├── errors
│   │   ├── base.error.js
│   │   ├── badRequest.error.js
│   │   ├── internalServer.error.js
│   │   ├── notFound.error.js
│   │   └── notImplemented.error.js
│   ├── models
│   │   └── problem.model.js
│   ├── repository
│   │   └── problem.repository.js
│   ├── routers
│   │   ├── index.js
│   │   ├── v1
│   │   │   └── problems.routes.js
│   │   └── v1.js
│   ├── services
│   │   └── problem.service.js
│   ├── utils
│   │   ├── errorHandler.js
│   │   └── markdownSanitizer.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Error Handling

Errors are managed using custom error classes that extend a base error class. These errors are caught and handled by a central error handler middleware.

### Custom Error Classes

- `badRequest.error.js`: Represents a bad request error.
- `internalServer.error.js`: Represents an internal server error.
- `notFound.error.js`: Represents a not found error.
- `notImplemented.error.js`: Represents a not implemented error.

### Error Handler Middleware

Located in `src/utils/errorHandler.js`, this middleware catches all errors and sends a structured response to the client.

## Database Configuration

The database connection is managed using Mongoose. Configuration details are stored in `src/config/db.config.js`. The connection string is fetched from environment variables.

### Connecting to MongoDB

The `connectToDB` function in `db.config.js` establishes a connection to the MongoDB database.

## Logging

Logging is configured using Winston. Logs are printed to the console with timestamps and log levels. The configuration is located in `src/config/logger.config.js`.

## Environment Variables

The server configuration, including the port and database connection string, is managed using environment variables. Create a `.env` file in the root directory with the following variables:

```makefile
PORT=3000
ATLAS_DB_URL=your_mongodb_connection_string
NODE_ENV=development
```

## Contact

For any inquiries, please contact [anushrh@gmail.com].
