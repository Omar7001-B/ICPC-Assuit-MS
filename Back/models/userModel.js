const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [3, "First name must be at least 3 characters long"],
    maxlength: [50, "First name must be at most 50 characters long"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+$/.test(v); // Only letters allowed
      },
      message: (props) => `${props.value} is not a valid name!`,
    },
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must be at least 3 characters long"],
    maxlength: [50, "Last name must be at most 50 characters long"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+$/.test(v); // Only letters allowed
      },
      message: (props) => `${props.value} is not a valid name!`,
    },
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        return /^(010|011|012|015)\d{8}$/.test(v); // Must start with 010, 011, 012, or 015 and be followed by 8 digits
      },
      message: (props) =>
        `${props.value} is not a valid phone number! It should be 11 digits and start with 010, 011, 012, or 015.`,
    },
  },
  nationalID: {
    type: String,
    required: [true, "National ID is required"],
    validate: {
      validator: function (v) {
        return /^\d{14}$/.test(v); // Must be exactly 14 digits
      },
      message: (props) =>
        `${props.value} is not a valid National ID! It should be exactly 14 digits.`,
    },
  },
  government: { type: String, required: [true, "Please choose a government"] }, // Region or state // in the front it should be dropdown list of all egypt governments
  city: { type: String, required: [true, "Please choose a city"] }, // Current city of residence // in the front it should be dropdown list of all egypt governments
  facebook: { type: String, default: null },

  // Academic Information
  university: { type: String, required: [true, "Please choose a University"] }, // in the front it should be dropdown list
  faculty: { type: String, required: [true, "Please choose a faculty"] }, // in the front it should be dropdown list
  level: { type: String, required: [true, "Please choose a level"] }, // Possible values: undergraduate, graduate // in the front it should be dropdown list
  academicEmail: { type: String, default: null },

  // Account Information
  gmail: { type: String, required: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (v) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          v
        );
      },
      message: (props) =>
        `Password is not strong enough! It must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.`,
    },
  },

  // Optional (Competitive Programming)
  codeforcesHandle: {
    type: String,
    required: [true, "Please enter the codeforcesHandle"],
  }, // it is reqired
  virtualJudgeHandle: { type: String, default: null }, // Optional

  // Permissions
  roles: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: [true, 'Please choose a role'] },
  ], // Reference to Role model

  // References
  trainings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Training" }], // Reference to Training model
  logs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Log" }], // Reference to Log model
});

module.exports = mongoose.model("User", userSchema);
