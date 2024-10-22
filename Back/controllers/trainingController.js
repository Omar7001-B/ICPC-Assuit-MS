import Training from "../models/trainingModel.js";
import Log from "../models/logModel.js";

// Create a new training session
export const createTraining = async (req, res) => {
  try {
    const training = new Training(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// API to get all traingins ID that user not in return array of ids
// API return training based on ID 

// Get all training sessions
export const getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find()
      .populate("participants")
      .populate("logs");
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a training session by ID // for admin
export const getTrainingById = async (req, res) => {
  try {
    const training = await Training.findById(req.params.id)
      .populate("participants")
      .populate("logs");
    if (!training)
      return res.status(404).json({ message: "Training not found" });
    res.status(200).json(training);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a training session
export const updateTraining = async (req, res) => {
  try {
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!training)
      return res.status(404).json({ message: "Training not found" });
    res.status(200).json(training);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a training session
export const deleteTraining = async (req, res) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (!training)
      return res.status(404).json({ message: "Training not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add participants to a training session
export const addParticipantsToTraining = async (req, res) => {
  const { participants } = req.body; // Expecting an array of participant IDs

  try {
    const training = await Training.findById(req.params.id);
    if (!training)
      return res.status(404).json({ message: "Training not found" });

    // Add new participants (avoid duplicates)
    training.participants = [
      ...new Set([...training.participants, ...participants]),
    ];
    await training.save();

    res.status(200).json({ message: "Participants added", training });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove participants from a training session
export const removeParticipantsFromTraining = async (req, res) => {
  const { participants } = req.body; // Expecting an array of participant IDs

  try {
    const training = await Training.findById(req.params.id);
    if (!training)
      return res.status(404).json({ message: "Training not found" });

    // Remove participants by filtering out the given IDs
    training.participants = training.participants.filter(
      (participantId) => !participants.includes(participantId.toString())
    );
    await training.save();

    res.status(200).json({ message: "Participants removed", training });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
