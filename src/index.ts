import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors";
const app: Express = express();
const prisma = new PrismaClient();
import dotenv from "dotenv";
import authenticationRouter from "./routes/authentication";
dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: true, credentials: true }));

app.get("/", async (req: Request, res: Response) => {
  res.send("Server is started");
});

app.use("/api/user", authenticationRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
export { app };
