import express from "express";
import { deleteDishController, fetchAllDishesController, fetchDishByIdController, insertDishController, updateDishController } from "./controllers/dishController.js";
import { createFeedbackController } from "./controllers/feedbackController.js";

const router = express.Router();

//Dishes Routes
router.get('/dishes',fetchAllDishesController);
router.get('/dishes/:id',fetchDishByIdController);
router.post('/createDish',insertDishController);
router.put('/updateDish/:id',updateDishController);
router.delete('/deleteDish/:id',deleteDishController)

//Feedback routes
router.post('/feedback',createFeedbackController);

export {router as routes};

