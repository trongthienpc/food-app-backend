"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_service_1 = require("../services/food.service");
const foodRouter = express_1.default.Router();
// get all foods
foodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("foodRouter.getall");
    const response = yield (0, food_service_1.getAllFoods)();
    if (response) {
        return res.status(200).json(response);
    }
}));
// get one food by id
foodRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("foodRouter.getOne");
    const id = req.params.id;
    const response = yield (0, food_service_1.getOneFoodById)(id);
    console.log(response);
    if (response) {
        return res.status(200).json(response);
    }
}));
exports.default = foodRouter;
