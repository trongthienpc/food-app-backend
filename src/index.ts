import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
const app: Express = express();
import dotenv from "dotenv";
import authenticationRouter from "./routes/authentication.routes";
import indexRouter from "./routes/index.routes";
import restaurantRouter from "./routes/restaurant.routes";
import userRouter from "./routes/user.routes";
import { tokenVerification } from "./services/authentication.service";
import foodRouter from "./routes/food.routes";
dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: true, credentials: true }));

app.use(express.static("./src/static"));

// verify logged in user
// app.use("*", tokenVerification);

// routes
app.use("/", indexRouter);

app.use("/api", authenticationRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(res.status(404).send("Sorry, the page was not found"));
// });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
export { app };
