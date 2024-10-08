import express from "express";
import {
  createTraining,
  getAllTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
} from "../controllers/trainingController.js"; // Adjust the path based on your project structure

const router = express.Router();

// Routes for training sessions
router.post("/", createTraining); // Create a new training session
router.get("/", getAllTrainings); // Retrieve all training sessions
router.get("/:id", getTrainingById); // Retrieve a specific training session by its ID
router.put("/:id", updateTraining); // Update a specific training session by its ID
router.delete("/:id", deleteTraining); // Delete a specific training session by its ID

export default router;
