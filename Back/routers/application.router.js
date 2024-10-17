import express from 'express';
import { applyForTraining , getTrainingApplications,changeStatus} from '../controllers/application.controller.js'; // Ensure .js extension

const applicationRouter = express.Router();

applicationRouter.get('/:id', getTrainingApplications);

applicationRouter.post('/apply', applyForTraining);

applicationRouter.post('/changeStatus', changeStatus);


export default applicationRouter;
