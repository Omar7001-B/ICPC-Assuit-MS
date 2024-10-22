import Application from "../models/applicationModel.js"; // Ensure .js extension
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Training from "../models/trainingModel.js";

export const applyForTraining = async (req, res) => {
  try {
    const { trainingId } = req.body;

    const authHeader =
      req.headers["authorization"] || req.headers["Authorization"];
    if (!authHeader)
      return res.status(401).json({ message: "No token provided" });
    const token = authHeader.split(" ")[1];
    console.log(token);
    let userId;
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken);
      userId = decodedToken.id;
    } catch (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Check if the application already exists
    const existingApplication = await Application.findOne({
      user: userId,
      training: trainingId,
    });

    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "You have already applied for this training." });
    }

    // Create new application instance
    const newApplication = new Application({
      user: userId,
      training: trainingId,
      status: "pending",
    });

    // Save application to database
    await newApplication.save();

    return res
      .status(201)
      .json({ message: "Application submitted successfully!" });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
};

export const getTrainingApplications = async (req, res) => {
  try {
    const trainingId = req.params.id;
    console.log(trainingId);
    let applications = await Application.find({ training: trainingId });
    console.log(applications);

    res.json({ data: applications });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
};

export const getUserApplications = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    let applications = await Application.find({ user: userId });
    console.log(applications);

    res.json({ data: applications });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
};

export const changeStatus = async (req, res) => {
  try {
    const applicationId = req.body.applicationId;
    const newstatus = req.body.status;
    const newcomment = req.body.comment;

    let application = await Application.findById(applicationId);
    if (!application) {
      console.log("Application not found");
      return;
    }
    if (newstatus == "accepted") {
      let user = await User.findById(application.user);
      let training = await Training.findById(application.training);

      // Check if the training is already added to the user's trainings array
      if (!user.trainings.includes(application.training)) {
        user.trainings.push(application.training); // Add training to user's trainings
        await user.save(); // Save the user document after modification
      }

      // Check if the user is already added to the training's participants array
      if (!training.participants.includes(application.user)) {
        training.participants.push(application.user); // Add user to training's participants
        await training.save(); // Save the training document after modification
      }
      console.log("added");
      
    }
    application.status = newstatus;
    application.comments += newcomment + "\n";
    await application.save();
    res.json({ data: application });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
};
