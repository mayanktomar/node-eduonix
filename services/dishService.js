import { Dishes } from "../models/dishes.js";
import mongoose from "mongoose";

export async function fetchAllDishes() {
  const dishes = await Dishes.find({});
  return dishes;
}

export async function fetchDishById (id) {
  const dish = await Dishes.findById(id);
  return dish;
}

export async function insertDish(dishData) {
  let dishes = [];
  dishes.push(dishData);
  return await Dishes.insertMany(dishes);
}

export async function updateDish(id,updateData) {
  const updatedDish = await Dishes.updateOne({_id:id},updateData);
  return updatedDish;
}

export async function deleteDish(id) {
  const deletedDish = await Dishes.deleteOne({_id:id});
  return deletedDish;
}