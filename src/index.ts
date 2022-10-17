import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const app: Express = express();
const prisma = new PrismaClient();
import dotenv from "dotenv";
dotenv.config();
app.get("/", async (req: Request, res: Response) => {
  const foods = await prisma.foods.findMany({});
  res.send(foods);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
export { app };
