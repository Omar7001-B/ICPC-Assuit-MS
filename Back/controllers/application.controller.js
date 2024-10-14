import Application from "../models/applicationModel.js"; // Ensure .js extension

export const applyForTraining = async (req, res) => {
  try {
    const { userId, trainingId } = req.body;

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

export const getAll = async (req, res) => {
  try {
    let applications = await Application.find();
    res.json({ data: applications });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      errors: error,
    });
  }
};
