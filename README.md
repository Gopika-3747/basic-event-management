# Event Management API

A simple RESTful API for managing events, built using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

---

## Features

- Create, read, update, and delete (CRUD) events
- Validates event dates (no past dates allowed)
- Built with TypeScript for type safety
- Uses MongoDB for persistent storage
- JSON-based responses for easy frontend integration

---

## Tech Stack

- **Node.js** & **Express** for server-side logic
- **MongoDB** with **Mongoose** for database operations
- **TypeScript** for static type-checking
- **dotenv** for environment configuration

---

## Project Structure
```
event-api/
├── src/
│ ├── models/
│ │ └── eventModel.ts
│ ├── routes/
│ │ └── eventRoutes.ts
│ ├── server.ts
├── package.json
├── tsconfig.json
├── .env
└── README.md

```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Gopika-3747/basic-event-management.git
cd basic-event-management
```
### 2. Install Dependencies
```bash
npm install
```

### 4. Start the Server (Development Mode)
```bash
npm run dev
```
The API will be available at:
http://localhost:5000/api
