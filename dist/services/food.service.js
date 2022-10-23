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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneFoodById = exports.getAllFoods = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// get all foods
const getAllFoods = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("food.service.getAllFoods");
        const data = yield prisma.foods.findMany({});
        if (data && data.length > 0) {
            return {
                success: true,
                message: "Foods found successfully.",
                data: data,
            };
        }
        else {
            return {
                success: false,
                message: "No food found",
                data: [],
            };
        }
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
        return {
            success: false,
            message: "Oops! Something went wrong",
            error: `Foods could not be error: ${error.message}`,
        };
    }
});
exports.getAllFoods = getAllFoods;
// get a restaurant by id
const getOneFoodById = (foodId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("food.services.getOneRestaurant");
    try {
        const response = yield prisma.foods.findUnique({
            where: {
                id: foodId,
            },
        });
        if (response) {
            return {
                success: true,
                message: "Food found",
                data: response,
            };
        }
        else {
            return {
                success: false,
                message: "Food not found",
                data: null,
            };
        }
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
        return {
            success: false,
            message: "Food not found | error",
            error: `GetOneFood failed | error: ${error.message}`,
        };
    }
});
exports.getOneFoodById = getOneFoodById;
