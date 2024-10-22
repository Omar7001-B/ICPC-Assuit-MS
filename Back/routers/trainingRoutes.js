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
import verifyToken from "../middlewares/verifyToken.js"; // Import the middleware to verify the token
import authorizeRoles from "../middlewares/checkRole.js"; // Import the middleware to check the user's role

const router = express.Router();

// Routes for training sessions

router.get   ("/"                   , verifyToken , authorizeRoles("Admin") , getAllTrainings); 
router.get   ("/:id"                , verifyToken , authorizeRoles("Admin") , getTrainingById); 
router.post  ("/"                   , verifyToken , authorizeRoles("Admin") , createTraining); 
router.put   ("/:id"                , verifyToken , authorizeRoles("Admin") , updateTraining); 
router.delete("/:id"                , verifyToken , authorizeRoles("Admin") , deleteTraining); 
router.post  ("/:id/participants"   , verifyToken , authorizeRoles("Admin") , addParticipantsToTraining); 
router.delete("/:id/participants"   , verifyToken , authorizeRoles("Admin") , removeParticipantsFromTraining);

router.get("/user/:id"              , verifyToken , authorizeRoles("User") , getTrainingByIdForUser); 
router.get("/user"                  , verifyToken , authorizeRoles("User") , getAllTrainingsForUser); 

export default router;