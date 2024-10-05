# ICPC MS Project

This project consists of a backend server built with Node.js and a frontend application using React and Vite. The backend manages data and provides APIs, while the frontend offers a user interface for interaction.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB cloud service)
- [Git](https://git-scm.com/) (for cloning the repository)

### Repository Structure

```
/ICPC-MS-Project
│
├── /back                  # Backend server
│   ├── index.js          # Main server file
│   ├── models/            # Mongoose models
│   ├── routes/            # API route definitions
│   ├── controllers/       # Business logic and route handling
│   ├── .env               # Environment variables
│   └── package.json       # Node.js dependencies
│
└── /front                 # Frontend application
    ├── src/              # React source files
    ├── index.html        # Main HTML file
    ├── .env              # Environment variables
    └── package.json       # Frontend dependencies
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Omar7001-B/ICPC-Assuit-MS/
   cd ICPC-Assuit-MS
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd back
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../front
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

### Running the Projects

- **Start the backend development server**:
  ```bash
  cd back
  npm run devStart
  ```

- **Start the frontend development server**:
  ```bash
  cd ../front
  npm run dev
  ```

### Project Structure

#### Backend

- **Models**: Defines the structure of the data using Mongoose schemas.
- **Routes**: Contains API endpoint definitions for handling requests.
- **Controllers**: Contains business logic for processing requests and interacting with models.

#### Frontend

- Contains React components, utilities, and configuration files for the application.

### Dependencies

**Backend Dependencies**:
- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `dotenv`: Zero-dependency module that loads environment variables from a `.env` file into `process.env`.

**Frontend Dependencies**:
- `react`: A JavaScript library for building user interfaces.
- `vite`: A build tool that focuses on speed and performance.
- Other dependencies as needed for the React application.

## Author

ICPC MS Team

## License

This project is licensed under the ISC License.
