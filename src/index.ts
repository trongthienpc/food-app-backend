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
  // const food = {
  //   restaurantId: "100",
  //   name: "McSpicy Chicken",
  //   price: 220.0,
  //   image: "mcspicychicken",
  //   category: "Burgers & Wraps",
  //   description:
  //     "Zesty and redolent whole muscle leg meat patty: Fried to perfect golden tan; quenched with creamy veg mayo and garden-fresh shredded iceberg lettuce. The sandwich is served in fresh, sesame-studded quarter pounder bun.",
  //   ingredients:
  //     "Quarter pounder bun crown, Veg sauce, Shredded lettuce, McSpicy chicken patty, Quarter pounder bun heel.",
  // };
  // await addFood(food);
  const foods = await prisma.foods.findMany({});
  res.send(foods);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
export { app };
