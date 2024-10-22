import express from "express";
import {
  createTraining,
  getAllTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
  addParticipantsToTraining, // New route to add participants
  removeParticipantsFromTraining,
  getAllTrainingsForUser, // New route to remove participants
  getTrainingByIdForUser
} from "../controllers/trainingController.js"; // Adjust the path based on your project structure

const router = express.Router();

// Routes for training sessions
router.post("/", createTraining); // Create a new training session
router.get("/", getAllTrainings); // Retrieve all training sessions
router.get("/user", getAllTrainingsForUser); // //get all trainings ids that user has not apply to 
router.get("/:id", getTrainingById); // Retrieve a specific training session by its ID
router.get("/user/:id", getTrainingByIdForUser); // Retrieve a specific training session by its ID
router.put("/:id", updateTraining); // Update a specific training session by its ID
router.delete("/:id", deleteTraining); // Delete a specific training session by its ID

// New routes for adding/removing participants
router.post("/:id/participants", addParticipantsToTraining); // Add participants to a training
router.delete("/:id/participants", removeParticipantsFromTraining); // Remove participants from a training

export default router;
