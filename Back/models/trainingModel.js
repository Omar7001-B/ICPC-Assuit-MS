const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true }, // Possible values: newcomer, phase1, phase2
  audience: { type: String, required: true }, // Possible values: newcomer, returning
  session: { type: String, required: true }, // Possible values: fall, spring, summer, winter
  start: { type: Date, required: true },
  method: { type: String, required: true }, // Possible values: online, onsite, hybrid
  location: { type: String, required: true },
  requirements: { type: [String], default: [] },
  deadline: { type: Date, required: true },

  // Reference
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Reference to User model
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Reference to Log model
});

module.exports = mongoose.model("Training", trainingSchema);
