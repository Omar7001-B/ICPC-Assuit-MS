import express from "express";
import { Router } from "express";
import{loginController} from "../controllers/login.controller.js";


let loginRouter=express.Router();

loginRouter.use(express.json());

loginRouter.post("/api/login", loginController);

export default loginRouter;