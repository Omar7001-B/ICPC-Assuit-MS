import express from "express";
import { Router } from "express";
import { signupController } from "../controllers/signup.controller.js";


// signup 
let signupRouter = express.Router();
signupRouter.use(express.json());

// login

signupRouter.post("/api/auth/signup", signupController);

export default signupRouter;
