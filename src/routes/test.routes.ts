import express from "express";

const testRouter = express.Router();

// get
testRouter.get("/", function (req, res) {
  return res.send("Hello World!");
});

export default testRouter;
