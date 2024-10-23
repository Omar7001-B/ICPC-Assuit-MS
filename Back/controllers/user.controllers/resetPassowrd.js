import User from "../../models/userModel.js";
import owasp from "owasp-password-strength-test";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { generateJWT } from "../../utils/generate.JWT.js";
import "dotenv/config";


// Remove duplicate bcrypt import
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "mohtawaelaraby@gmail.com", // Your Gmail account
    pass: "dfnh xkto rlrq xjcj", // Your Gmail app password (consider moving this to environment variables)
  },
});

const generateVerificationCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit code
};

const createMailOptions = (recipientEmail, verificationCode) => ({
  from: '"ICPC ASSIUT UNIVERSITY COMMUNITY" <maddison53@ethereal.email>', // sender address
  to: recipientEmail, // receiver
  subject: "Reset Password", // Subject line
  text: `Your verification code is: ${verificationCode}`, // plain text body
  html: `<b>Your verification code is: ${verificationCode}</b>`, // HTML body
});

const sendVerificationEmail = async (recipientEmail) => {
  try {
    const verificationCode = generateVerificationCode(); // Generate 5-digit code
    const mailOptions = createMailOptions(recipientEmail, verificationCode); // Create mail options
    const info = await transporter.sendMail(mailOptions); // Send email
    console.log("Message sent: %s", info.messageId);
    return verificationCode; // Return the generated code, in case you need it
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send verification email.");
  }
};

const sendEmailController = async (req, res) => {
  const { email } = req.body;

  try {
    const trimmedEmail = email.trim(); // Trim email to remove spaces
    const theCode = await sendVerificationEmail(trimmedEmail);

    const salt = await bcrypt.genSalt(10);
    const hashedCode = await bcrypt.hash(theCode, salt);

    // Store hashed code in session or database rather than in memory
    //req.session.hashedCode = hashedCode;
    const codeToken = await generateJWT({ hashedCode: hashedCode } , "3m");

    res.status(200).json({
      status: "success",
      message: "Verification code sent successfully",
      data: {
        email: trimmedEmail,
        verificationCode: codeToken,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to send verification code",
    });
  }
};

const isVerifiedEmailController = async (req, res) => {
  const { code } = req.body;
  console.log("code user sent : ---  " , code) ; 

  try {
    let hashedCode = req.hashedCode.hashedCode; 
    console.log("this is the hased code token : --- " , hashedCode) ;
    if (!hashedCode) {
      return res.status(400).json({
        status: "fail",
        message: "No verification code found, Try again later",
      });
    }

    const isMatch = await bcrypt.compare(code, hashedCode);


    // success 
    // localStorage.hashed = null 
    // make it token
    if (isMatch) {
      hashedCode = null; 
      res.status(200).json({
        status: "success",
        message: "Valid verification code",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Invalid verification code",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred",
    });
  }
};

const resetPasswordController = async (req, res) => {
  const { newPassword, confirmPassword, curEmail } = req.body;
  console.log("Request body: ", req.body);

  try {
    const isUserExist = await User.findOne({ email: curEmail }); // Assuming your model uses 'email'

    if (!isUserExist) {
      return res.status(400).json({
        status: "fail",
        message: "User not found. Could not reset password, try again later",
        data: null,
      });
    }

    const result = owasp.test(newPassword);

    if (result.errors.length > 0) {
      return res.status(400).json({
        status: "fail",
        message: result.errors,
        data: null,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Password and confirm password do not match",
        data: null,
      });
    }

    const salt = await bcrypt.genSalt(10);
    isUserExist.password = await bcrypt.hash(newPassword, salt);

    await isUserExist.save();
    res.status(200).json({
      status: "success",
      message: "Password has been reset successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred while resetting the password",
    });
  }
};


const getRoleController = async (req, res) => {
  
    try{
        const UserRole = req.currentuser.role ; 
        res.status(200).json({
            status: "success",
            message: "User Role",
            data: UserRole,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "An unexpected error occurred while getting the user role",
        });
    }

} ; 

export  { sendEmailController, isVerifiedEmailController, resetPasswordController , getRoleController };
