const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Define constants for environment variables
const MONGODB_URI = process.env.MONGODB_URI || ""; // MongoDB connection string
const PORT = process.env.PORT || 3001; // Server port with a default value

const app = express();
const rolesRoute = require("./routes/role");
// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use("/trainings");
// app.use("/users");
// app.use("/history");
app.use("/role", rolesRoute);

// Connect to MongoDB using the connection string from the .env file
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Default endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the ICPC Training Management System!");
});

// Start the server using the defined PORT variable
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
