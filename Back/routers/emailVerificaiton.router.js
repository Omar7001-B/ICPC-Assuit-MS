import express from "express";
import {Router} from "express";
import {sendEmailController , isVerifiedEmailController} from "../controllers/sendMail.controller.js";
import 'dotenv/config';

let emailVerificationRouter = Router();
emailVerificationRouter.use(express.json());

emailVerificationRouter.post("/sendCode", sendEmailController);
emailVerificationRouter.post("/checkCode" , isVerifiedEmailController);

export default emailVerificationRouter;

 
//  /api/gmail/sendCode
//  /api/gmail/checkCode