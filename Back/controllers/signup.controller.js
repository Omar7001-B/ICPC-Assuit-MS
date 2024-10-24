import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { generateJWT } from "../utils/generate.JWT.js";

// Signup Controller
export const signupController = async (req, res) => {
  try {
    const userData = req.body.body;
    console.log("the user data is " , userData) ; 
    
    // int the request body will be sent from the front end he should assien the value of the following variables  <-------
    userData.isCodeforcesVerified;
    userData.isGmailVerified;

    console.log("i try to save nowwwwwwwwwwwwwwwww1") ;
    const existingUser = await User.findOne({
      $or: [{ gmail: userData.gmail }, { phone: userData.phone }],
    });

    console.log("i try to save nowwwwwwwwwwwwwwwww2") ;
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Cannot create new user, Please check you data",
        data: null,
      });
    }

    console.log("i try to save nowwwwwwwwwwwwwwwww3") ;
    if (userData.isGmailVerified == false) {
      return res.status(400).json({
        status: "fail",
        message: "Please verify your gmail",
        data: null,
      });
    }

    console.log("i try to save nowwwwwwwwwwwwwwwww4") ;
    userData.isCodeforcesVerified = true ; 
    if (userData.isCodeforcesVerified == false) {
      return res.status(400).json({
        status: "fail",
        message: "Please verify your Codeforces handle",
        data,
      });
    }

    console.log("i try to save nowwwwwwwwwwwwwwwww5") ;
    // i put the condition because it will be hashed even the password is empty
    if (userData.password && userData.password.length > 1) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }
    
    console.log("i try to save nowwwwwwwwwwwwwwwww6") ;
    const newUser = new User(userData);
    // generating JWT token
    const token = await generateJWT({
        firstName: newUser.firstName, 
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.roles,
        codeforcesHandle: newUser.codeforcesHandle}
      ); 

    console.log("i try to save nowwwwwwwwwwwwwwwww7") ;
    newUser.token = token;
    await newUser.validate();

    console.log("i try to save nowwwwwwwwwwwwwwwww8") ;
    //console.log("the user is --------------------" , newUser);
    await newUser.save();

    console.log("sssssuer rooles , " ,newUser.roles)

    console.log("i try to save nowwwwwwwwwwwwwwwww9") ;
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
      data: error,

    });
  }
};