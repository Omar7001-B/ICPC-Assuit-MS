import express from 'express';
import { applyForTraining , getAll} from '../controllers/application.controller.js'; // Ensure .js extension

const applicationRouter = express.Router();

applicationRouter.get('/', getAll);

applicationRouter.post('/apply', applyForTraining);

export default applicationRouter;
