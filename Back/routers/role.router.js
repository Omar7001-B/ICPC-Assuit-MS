import express from 'express';
import { getAll, edit, getById, create, deleteById, replace } from '../controllers/role.controller.js';
import verifyToken from '../middlewares/verifyToken.js';
import authorizeRoles from '../middlewares/checkRole.js';

const roleRrouter = express.Router();

roleRrouter.get("/all/", getAll);
roleRrouter.patch("/", edit);
roleRrouter.get("/", getById);
roleRrouter.post("/", create);
roleRrouter.delete("/", deleteById);
roleRrouter.put("/", replace);

export default roleRrouter;

