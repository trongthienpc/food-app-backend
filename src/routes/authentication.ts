import express, { Request, Response } from "express";
import {
  checkUsernameExist,
  tokenRefresh,
  userLogin,
  userRegister,
} from "../services/authentication";
var authenticationRouter = express.Router();

authenticationRouter.post(
  "/register",
  async (req: Request, res: Response, next: any) => {
    let body = req.body;
    let response = await userRegister(body);
    res.json(response);
  }
);

authenticationRouter.post(
  "/login",
  async (req: Request, res: Response, next: any) => {
    let body = req.body;
    let response = await userLogin(body);
    res.json(response);
  }
);

authenticationRouter.get(
  "/user-exist",
  async (req: Request, res: Response, next: any) => {
    let params = req.query;
    let response = await checkUsernameExist(params);
    res.json(response);
  }
);

authenticationRouter.post("/refresh-token", tokenRefresh);

export default authenticationRouter;
