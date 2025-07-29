# CICD Node.js Project

This repository demonstrates a simple Node.js application with CI/CD integration using GitHub Actions.

## Features
- Express.js server with a single endpoint (`/`)
- Automated testing using Jest and Supertest
- CI/CD pipeline for build, test, and branch protection

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
```bash
npm install
```

### Running the Application
```bash
npm start
```
The server will start on port 3000 by default.

### Running Tests
```bash
npm test
```

## Project Structure
```
├── src/
│   ├── app.js        # Express app
│   └── index.js      # Server entry point
├── test/
│   └── app.test.js   # Jest/Supertest tests
├── package.json      # Project metadata and scripts
├── jest.config.js    # Jest configuration
├── .github/workflows/ci-cd.yml # GitHub Actions workflow
└── .gitignore        # Ignore node_modules and dist
```

## API
### GET /
Returns a JSON message:
```json
{ "message": "Hello CI/CD World!, test push" }
```

## CI/CD Pipeline
- Blocks manual merges and direct pushes to `master`
- Runs build and tests on push and pull requests to `test1`, `test2`, and `master`
- Verifies branch merge after successful tests

See `.github/workflows/ci-cd.yml` for details.

## License
ISC
