import Application from "../models/applicationModel.js"; // Ensure .js extension
import jwt from "jsonwebtoken";

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

export const changeStatus = async (req, res) => {
  try {
    const applicationId = req.body.applicationId;
    const newstatus=req.body.status;
    const newcomment=req.body.comment;
    console.log(applicationId,newstatus,newcomment);
    console.log(applicationId,newstatus,newcomment);
    let application = await Application.findById(applicationId);
    if (!application) {
      console.log('Application not found');
      return;
    }
    application.status=newstatus;
    application.comments+=newcomment+'\n';
    console.log(application);
    await application.save();
    res.json({ data: application });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error
    });
  }
};
