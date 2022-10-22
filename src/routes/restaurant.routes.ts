import express from "express";
import {
  getAllRestaurants,
  getOneRestaurantById,
} from "../services/restaurant.service";
const restaurantRouter = express.Router();

restaurantRouter.get("/", async (req, res) => {
  console.log("restaurantRouter.getall");
  const response = await getAllRestaurants();
  if (response) {
    return res.status(200).json(response);
  }
});

restaurantRouter.get("/:id", async (req, res) => {
  console.log("restaurantRouter.getOne");
  const id = req.params.id;
  const response = await getOneRestaurantById(id);
  console.log(response);
  if (response) {
    return res.status(200).json(response);
  }
});
export default restaurantRouter;
