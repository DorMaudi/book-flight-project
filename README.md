# ✈️ Book Flight Project

This is a full-stack application for booking flights, including both frontend and backend services.

---

## 📦 Project Structure

- **Backend:** `backend/FlightService`  
  Handles flight data, bookings, and API logic.

- **Frontend:** `frontend-book-flight-project`  
  A web interface for browsing flights and making bookings.

---

## 🚀 How to Run the Project

### 1. Backend Setup

```bash
cd backend/FlightService
npm install
npm start
```

### 2. Frontend Setup

```bash
cd frontend-book-flight-project
npm install
npm start
```

---

## ✅ Running Tests

### Backend Tests

```bash
cd backend/FlightService
npm run test
```

### Frontend Tests

```bash
cd frontend-book-flight-project
npm run test
```

---

## ⚙️ CI/CD & Deployment
- Automated tests and builds run on every push via GitHub Actions (flights-ci.yaml).
- The workflow installs dependencies, runs backend and frontend tests, and can deploy to cloud platforms (e.g., Render).

---

## 🐳 Docker Build & Run

To build and start the project using Docker Compose:

```bash
docker compose up --build
```

Make sure Docker is installed and running on your system before executing this command.

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

---

## 🧩 Steps to Expand the System
### 1. Add New Backend Features
Create new endpoints:
Add new routes in controllers and update src/index.js.
Add business logic:
Implement new services in src/services.
Database changes:
Update models and queries in src/data-access and apply migrations to your PostgreSQL DB.
### 2. Expand the Frontend
Add new pages/components:
Create new React components in src.
Update API calls:
Use axios to connect new frontend features to backend endpoints.
Improve UI/UX:
Add forms, modals, or new navigation as needed.
### 3. Update Tests
Backend:
Add or update tests in tests using Mocha/Chai.
Frontend:
Add or update Cypress E2E tests in e2e.
### 4. Update Docker Configuration
Add new services:
If needed, add new services (e.g., cache, auth) to compose.yaml.
Update environment variables:
Add any new variables to .env files and compose.yaml.
### 5. Update CI/CD Pipeline
Modify workflow:
Update flights-ci.yaml to include new build, test, or deploy steps.
Add new test jobs:
Ensure new features are covered in automated tests.
### 6. Document the Changes
Update README.md:
Add usage instructions for new features.
Add API docs:
Document new endpoints and data models.
### 7. Deploy the Updated System
Local:
Run: 
```bash
docker compose up --build
```
to test locally.

Production:
Push to main branch to trigger CI/CD and deploy to your cloud provider. 

---
