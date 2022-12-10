import express from "express";
import { fetchAllDishesController, fetchDishByIdController, insertDishController, updateDishController } from "./controllers/dishController.js";

const router = express.Router();

router.get('/dishes',fetchAllDishesController);

router.get('/dishes/:id',fetchDishByIdController);

router.post('/createDish',insertDishController);

router.put('/updateDish/:id',updateDishController)

export {router as routes};

