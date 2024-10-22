import express from "express";
import { getUserInfo } from "../controllers/user.controllers/getUserInfo.js";
import { editUserInfo } from "../controllers/user.controllers/updateUserInfo.js";
import {
  getAllUsers,
  deleteById,
  addRole,
  removeRole,
} from "../controllers/user.controllers/user.controller.js"; // Ensure .js extension
import  verifyToken  from "../middlewares/verifyToken.js";
import authorizeRoles from "../middlewares/checkRole.js";

let userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/UserInfo", getUserInfo);
userRouter.patch("/UserInfo", editUserInfo);

userRouter.get("/" , verifyToken , authorizeRoles("Admin") , getAllUsers); // admin only

userRouter.delete("/:id", verifyToken, authorizeRoles("Admin" , "User") , deleteById); // must be middleware to check that the user is admin
 
// we will add role manually 
//userRouter.patch("/addRole/:id", addRole); // must be middleware to check that the user is admin

// we will add role manually 
//userRouter.patch("/removeRole/:id", removeRole); // must be middleware to check that the user is admin
 
export default userRouter;
