const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  training: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Training",
    required: true,
  }, // Reference to Training model
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"], // Possible statuses for application
    default: "pending",
  },
  submittedAt: { type: Date, default: Date.now }, // Date when the application was submitted
  comments: { type: String, default: null }, // Optional comments or feedback
});

module.exports = mongoose.model("Application", applicationSchema);
