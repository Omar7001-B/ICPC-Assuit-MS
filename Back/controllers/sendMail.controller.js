import nodemailer from "nodemailer";
import "dotenv/config";
import bcrypt from "bcrypt";


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "mohtawaelaraby@gmail.com", // Your Gmail account
    pass: "dfnh xkto rlrq xjcj", // Your Gmail app password
  },
});

const generateVerificationCode = () => {
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit code
};

const createMailOptions = (recipientEmail, verificationCode) => ({
  from: '"ICPC ASSIUT UNIVERSITY COMMUNITY" <maddison53@ethereal.email>', // sender address
  to: recipientEmail, // receiver
  subject: "Verification Code", // Subject line
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

async function sendEmail(recipientEmail) {
  try {

    let vercode = await sendVerificationEmail(recipientEmail);
    console.log(`Verification code is: ${vercode}`); // Corrected log
    return vercode;

  } catch (error) {

    console.error(error);

  }
}

// Correcting the parameter order and adding const declaration
var haseddCode; // it should be replaced with something else.
const sendEmailController = async (req, res) => {
  let email = req.body.email;

  try {

    let { email } = req.body; // Changed to let
    email = email.trim();
    //email = "icpcnews5@gmail.com";
    let theCode = await sendEmail(email);

    const salt = await bcrypt.genSalt(10);
    const hashedCode = await bcrypt.hash(theCode, salt);
    haseddCode = hashedCode;

    res.status(200).json({
      status: "success",
      message: "Verification code sent successfully",
      data: {
        email,
        verificationCode: hashedCode,
      },
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "Failed to send verification code",
    });

  }
  console.log(email);
};

const isVerifiedEmailController = async (req, res) => {

  try {

    const code = req.body.code; // cast the code to integer value
    await bcrypt.compare(code, haseddCode, (err, result) => {
      if (result) {
        res.status(200).json({
          status: "success",
          message: "valid",
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "invalid",
        });
      }
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred",
    });
  }
  
};

export { sendEmailController, isVerifiedEmailController };
