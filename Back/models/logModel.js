import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  details: { type: String, required: true }, // Description of the action performed
  userId: { type: mongoose.Schema.Types.ObjectId, default: null }, // ID of the user (actor or target)
  roleId: { type: mongoose.Schema.Types.ObjectId, default: null }, // Optional: ID of a role (if applicable)
  trainingId: { type: mongoose.Schema.Types.ObjectId, default: null }, // Optional: ID of a training (if applicable)
  timestamp: { type: Date, default: Date.now }, // When the action occurred
});

// Export the Log model using ES Module syntax
const Log = mongoose.model("Log", logSchema);
export default Log;
