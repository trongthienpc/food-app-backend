import express, { Express, Request, Response } from "express";
const app: Express = express();
import dotenv from "dotenv";
dotenv.config();
app.get("/", (req: Request, res: Response) => {
  res.send("Hi there!");
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
