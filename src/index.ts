import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const app: Express = express();
const prisma = new PrismaClient();
import dotenv from "dotenv";
dotenv.config();

interface Food {
  id?: string;
  restaurantId?: string;
  name?: string;
  price?: number;
  image?: string;
  category: string;
  description?: string;
  ingredients?: string;
}

async function addFood(food: Food) {
  const entity = await prisma.foods.create({
    data: food,
  });
  return entity;
}

app.get("/", async (req: Request, res: Response) => {
  const food = {
    restaurantId: "100",
    name: "McSpicy Paneer",
    price: 210.0,
    image: "mcspicypaneer",
    category: "Burgers & Wraps",
    description:
      "Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping.",
    ingredients:
      "Quarter pounder bun crown, Shredded lettuce, Tandoori mayo, Spicy paneer patty, Quarter pounder bun heel.",
  };
  await addFood(food);
  const foods = await prisma.foods.findMany({});
  res.send(foods);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
export { app };
