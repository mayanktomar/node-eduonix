import { fetchAllDishes, fetchDishById, insertDish, updateDish } from "../services/dishService.js";

export async function fetchAllDishesController (req,res) {
  try {
    const dishes = await fetchAllDishes();
    return res.status(200).json(dishes);
  } catch (err) {
    return res.status(500).send("Error while fetching the dishes");
  }
}

export async function fetchDishByIdController (req,res) {
  const id = req.params.id;
  try {
    const dish = await fetchDishById(id);
    return res.status(200).json(dish);
  } catch (err) {
    return res.status(500).send("Error while fetching the dish");
  }
}

export async function insertDishController (req,res) {
  const data = req.body;
  try {
    const dish = await insertDish(data);
    return res.status(200).json(dish);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error while inserting the dish into database");
  }
}

export async function updateDishController (req,res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const dish = await updateDish(id,data);
    return res.status(200).json(dish);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error while updating the dish into database");
  }
}

