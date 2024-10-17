import express from 'express';
import { applyForTraining , getTrainingApplications,changeStatus,getUserApplications} from '../controllers/application.controller.js'; // Ensure .js extension

const applicationRouter = express.Router();

applicationRouter.get('/training/:id', getTrainingApplications);

applicationRouter.get('/user/:id', getUserApplications);

applicationRouter.post('/apply', applyForTraining);

applicationRouter.post('/changeStatus', changeStatus);


export default applicationRouter;
