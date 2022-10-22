import express from "express";
import { getAllRestaurants } from "../services/restaurant.service";
const restaurantRouter = express.Router();

restaurantRouter.get("/", async (req, res) => {
  console.log("restaurantRouter.getall");
  const response = await getAllRestaurants();
  if (response) {
    return res.status(200).json(response);
  }
});

export default restaurantRouter;
