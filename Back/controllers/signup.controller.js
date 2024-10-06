import bcrypt from "bcrypt";
import User from "../models/userModel.js";

// Signup Controller
export const signupController = async (req, res) => {
  try {
    const userData = req.body;
    // int the request body will be sent from the front end he should assien the value of the following variables  <-------
    userData.isCodeforcesVerified;
    userData.isGmailVerified;

    const existingUser = await User.findOne({
      $or: [{ gmail: userData.gmail }, { phone: userData.phone }],
    });

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Cannot create new user, Please check you data",
        data: null,
      });
    }

    if (userData.isGmailVerified == false) {
      return res.status(400).json({
        status: "fail",
        message: "Please verify your gmail",
        data: null,
      });
    }

    if (userData.isCodeforcesVerified == false) {
      return res.status(400).json({
        status: "fail",
        message: "Please verify your Codeforces handle",
        data,
      });
    }

    // i put the condition because it will be hashed even the password is empty
    if (userData.password && userData.password.length > 1) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }

    const newUser = new User(userData);
    await newUser.validate();
    await newUser.save();
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({
        status: "fail",
        message: "Cannot create account with your data",
        data: {
          errors: validationErrors, // Return detailed validation errors
        },
      });
    }
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred",
      data: null,
    });
  }
};
