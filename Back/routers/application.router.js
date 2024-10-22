import express from 'express';
import { applyForTraining , getTrainingApplications,changeStatus,getUserApplications} from '../controllers/application.controller.js'; // Ensure .js extension

const applicationRouter = express.Router();

//admin
applicationRouter.get('/training/:id', getTrainingApplications);

// user application 
applicationRouter.get('/user/:id', getUserApplications);


applicationRouter.post('/apply', applyForTraining);

applicationRouter.post('/changeStatus', changeStatus);
// if accepted add the trainingD to the user

export default applicationRouter;
