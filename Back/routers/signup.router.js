import express from "express";
import { Router } from "express";
import { signupController } from "../controllers/signup.controller.js";

let signupRouter = express.Router();
signupRouter.use(express.json());

signupRouter.post("/api/signup", signupController);

export default signupRouter;
