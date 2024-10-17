import express from "express";
import { getUserInfo } from "../controllers/user.controllers/getUserInfo.js";
import { editUserInfo } from "../controllers/user.controllers/updateUserInfo.js";
import {
  getAllUsers,
  deleteById,
  addRole,
  removeRole,
} from "../controllers/user.controllers/user.controller.js"; // Ensure .js extension

let userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/UserInfo", getUserInfo);
userRouter.patch("/UserInfo", editUserInfo);

userRouter.get("/", getAllUsers);

userRouter.delete("/:id", deleteById);

userRouter.patch("/addRole/:id", addRole);

userRouter.patch("/removeRole/:id", removeRole);

export default userRouter;
