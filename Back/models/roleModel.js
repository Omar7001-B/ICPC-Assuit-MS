const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: { type: [String], default: [] },

  // Reference to Logs
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Array of logs for this role
});

module.exports = mongoose.model("Role", roleSchema);
