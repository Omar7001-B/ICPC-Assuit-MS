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

  // Roles
  roles: { type: [String], required: true, default: ["user"] }, // Default role set to 'user'

  // Reference to Training
  trainings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Training" }], // Optional

  // Reference to Logs
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Array of logs for this user
});

module.exports = mongoose.model("User", userSchema);
