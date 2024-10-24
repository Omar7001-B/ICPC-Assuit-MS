import express from "express";
import {
  createTraining,
  getAllTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
  addParticipantsToTraining, // New route to add participants
  removeParticipantFromTraining,
  getAllTrainingsForUser, // New route to remove participants
  getTrainingByIdForUser,
} from "../controllers/trainingController.js"; // Adjust the path based on your project structure
import verifyToken from "../middlewares/verifyToken.js"; // Import the middleware to verify the token
import authorizeRoles from "../middlewares/checkRole.js"; // Import the middleware to check the user's role

const router = express.Router();

// Routes for training sessions

router.get("/all", verifyToken, authorizeRoles("Admin"), getAllTrainings);
router.get("/", verifyToken, authorizeRoles("Admin"), getTrainingById);
router.post("/", verifyToken, authorizeRoles("Admin"), createTraining);
router.put("/", verifyToken, authorizeRoles("Admin"), updateTraining);
router.delete("/", verifyToken, authorizeRoles("Admin"), deleteTraining);
router.post(
  "/participant",
  verifyToken,
  authorizeRoles("Admin"),
  addParticipantsToTraining
);
router.delete(
  "/participant",
  verifyToken,
  authorizeRoles("Admin"),
  removeParticipantFromTraining
);

router.get(
  "/user",
  verifyToken,
  authorizeRoles("User"),
  getTrainingByIdForUser
);
router.get(
  "/user/all",
  verifyToken,
  authorizeRoles("User"),
  getAllTrainingsForUser
);

export default router;
