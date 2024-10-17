import express from "express";
import { getUserInfo } from "../controllers/user.controllers/getUserInfo.js";
import { editUserInfo } from "../controllers/user.controllers/updateUserInfo.js";

let userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/UserInfo", getUserInfo);
userRouter.patch("/UserInfo", editUserInfo);

export default userRouter;