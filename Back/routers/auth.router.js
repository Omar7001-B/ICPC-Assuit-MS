import express from "express";
import { signupController } from "../controllers/signup.controller.js";
import { loginController } from "../controllers/login.controller.js";


// signup 
let authRouter = express.Router();
authRouter.use(express.json());

// login

authRouter.post("/api/auth/signup", signupController);
authRouter.post("/api/auth/login", loginController);

export default authRouter;
