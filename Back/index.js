import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import roleRouter from "./routers/role.router.js"; // Make sure the file path is correct and use the `.js` extension in ESM
import "dotenv/config"; // Automatically loads environment variables from the .env file
import authRouter from "./routers/auth.router.js";
import emailVerificationRouter from "./routers/emailVerificaiton.router.js";
import codeforcesRouter from "./routers/codeforces.router.js";
<<<<<<< HEAD
import applicationRouter from './routers/application.router.js';
import userRouter from "./routers/user.router.js";
import  verifyToken  from "./middlewares/verifyToken.js";
=======
import applicationRouter from "./routers/application.router.js";
import trainingRouter from "./routers/trainingRoutes.js";
>>>>>>> 26fa7b662bcd6b2d91df30839a84885c03000979

// Define constants for environment variables
const MONGODB_URI = process.env.MONGODB_URI || ""; // MongoDB connection string
const PORT = process.env.PORT || 5555; // Server port with a default value

const app = express();
// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use("/trainings");
// app.use("/users");
// app.use("/history");
app.use("/role", roleRouter);

// Connect to MongoDB using the connection string from the .env file
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes

app.use("/api/trainings", trainingRouter); // Omar
app.use("/api/emailVerification", emailVerificationRouter); // Following /api/emailVerification style
app.use(authRouter);
app.use(codeforcesRouter);
<<<<<<< HEAD
app.use("/Applies",applicationRouter);
app.use("/api", verifyToken , userRouter);
=======
app.use("/api/Applications", applicationRouter);
>>>>>>> 26fa7b662bcd6b2d91df30839a84885c03000979

// Default endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the ICPC Training Management System!");
});

// Start the server using the defined PORT variable
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
