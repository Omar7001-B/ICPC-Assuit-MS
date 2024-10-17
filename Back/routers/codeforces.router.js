import express from "express";
import  {verifyHandle}  from "../controllers/codeforces.controller.js";

let codeforcesRouter = express.Router();
codeforcesRouter.use(express.json());

codeforcesRouter.post("/api/codeforces/verifyHandle", verifyHandle);

export default codeforcesRouter;
