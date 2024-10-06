import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: { type: [String], default: [] },

  // Reference
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Array of logs for this role
});

export default mongoose.model("Role", roleSchema);
