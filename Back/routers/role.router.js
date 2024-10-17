import express from 'express';
import { getAll, edit, getById, create, deleteById, replace } from '../controllers/role.controller.js';

const roleRrouter = express.Router();

roleRrouter.get("/", getAll);
roleRrouter.patch("/:id", edit);
roleRrouter.get("/:id", getById);
roleRrouter.post("/", create);
roleRrouter.delete("/:id", deleteById);
roleRrouter.put("/:id", replace);

export default roleRrouter;

