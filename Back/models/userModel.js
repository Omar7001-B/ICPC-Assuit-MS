const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Personal Information
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  nationalID: { type: String, required: true },
  government: { type: String, required: true }, // Region or state
  city: { type: String, required: true }, // Current city of residence

  // Academic Information
  university: { type: String, required: true },
  faculty: { type: String, required: true },
  level: { type: String, required: true }, // Possible values: undergraduate, graduate
  academicEmail: { type: String, required: true },

  // Account Information
  gmail: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }, // Handle password confirmation in application logic

  // Optional (Competitive Programming)
  codeforcesHandle: { type: String, default: null }, // Optional
  virtualJudgeHandle: { type: String, default: null }, // Optional

  // References
  roles: { type: [String], required: true, default: ["user"] }, // Reference to Role model
  trainings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Training" }], // Reference to Training model
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Reference to Log model
});

module.exports = mongoose.model("User", userSchema);
