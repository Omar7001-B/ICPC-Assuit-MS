import mongoose from "mongoose";

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
      message: (props) =>
        `${props.value} is not a valid name! Only letters are allowed.`,
    },
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [3, "Last name must be at least 3 characters long"],
    maxlength: [50, "Last name must be at most 50 characters long"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid name! Only letters are allowed.`,
    },
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^(010|011|012|015)\d{8}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! It should be 11 digits long and start with 010, 011, 012, or 015.`,
    },
  },

  nationalID: {
    type: String,
    required: [true, "National ID is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{14}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid National ID! It should be exactly 14 digits.`,
    },
  },

  government: {
    type: String,
    required: [true, "Please choose a government"],
  },

  city: {
    type: String,
    required: [true, "Please choose a city"],
  },

  facebook: {
    type: String,
    unique: true,
    default: null,
  },

  university: {
    type: String,
    required: [true, "Please choose a University"],
  },

  faculty: {
    type: String,
    required: [true, "Please choose a faculty"],
  },

  level: {
    type: String,
    required: [true, "Please choose a level"],
  },

  academicEmail: {
    type: String,
    unique: true,
    default: null,
  },

  gmail: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email format!`,
    },
  },

  isGmailVerified: {
    type: Boolean,
    required: [true, "You should verify your Gmail account"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [1, "Password cannot be an empty string"],
  },

  codeforcesHandle: {
    type: String,
    required: [true, "Please enter the Codeforces handle"],
    unique: [true],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]+$/.test(v); // Only letters and numbers allowed
      },
      message: (props) =>
        `${props.value} is not a valid Codeforces handle! Only letters and numbers are allowed.`,
    },
  },

  isCodeforcesVerified: {
    type: Boolean,
    required: [true, "You should verify your Codeforces handle"],
  },

  virtualJudgeHandle: {
    type: String,
    default: null,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]*$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid Virtual Judge handle! Only letters and numbers are allowed.`,
    },
  },

  roles: {
    type: String,
    enum: ["User", "Admin", "Mentor"],
    default: "User",
  },

  token: {
    type: String,
    required: [true, "Token is required"],
  },
  // References
  trainings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Training",
    },
  ], // Reference to Training model

  logs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Log",
    },
  ], // Reference to Log model
});

mongoose.model("User", userSchema);
export default mongoose.model("User");
