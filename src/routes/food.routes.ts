import express from "express";
import { getAllFoods, getOneFoodById } from "../services/food.service";
const foodRouter = express.Router();

// get all foods
foodRouter.get("/", async (req, res) => {
  console.log("foodRouter.getall");
  const response = await getAllFoods();
  if (response) {
    return res.status(200).json(response);
  }
});

// get one food by id
foodRouter.get("/:id", async (req, res) => {
  console.log("foodRouter.getOne");
  const id = req.params.id;
  const response = await getOneFoodById(id);
  console.log(response);
  if (response) {
    return res.status(200).json(response);
  }
});
export default foodRouter;
