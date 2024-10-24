import express from "express";
import { signupController } from "../controllers/signup.controller.js";
import { loginController } from "../controllers/login.controller.js";
import * as ResetPass from "../controllers/user.controllers/resetPassowrd.js" ;
import verifyToken from "../middlewares/verifyToken.js";
import authorizeRoles from "../middlewares/checkRole.js";
import { getRoleController } from "../controllers/user.controllers/resetPassowrd.js";
import checkExp from "../middlewares/checkExp.js";


// signup 
let authRouter = express.Router();
authRouter.use(express.json());

// login

authRouter.post("/api/auth/signup", signupController);
authRouter.post("/api/auth/login", loginController);

authRouter.get("/api/auth/verifyEmail", checkExp , ResetPass.isVerifiedEmailController);
authRouter.post("/api/auth/sendEmail", ResetPass.sendEmailController);
authRouter.post("/api/auth/resetPassword", ResetPass.resetPasswordController);
authRouter.get("/api/auth/getRole" , verifyToken , authorizeRoles("Admin" , "User") , getRoleController);

export default authRouter;
