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
exports.getOneRestaurantById = exports.getAllRestaurants = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// get all restaurants
const getAllRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("restaurant.service.getAllRestaurants");
        const data = yield prisma.restaurants.findMany({});
        if (data && data.length > 0) {
            return {
                success: true,
                message: "Restaurants found successfully.",
                data: data,
            };
        }
        else {
            return {
                success: false,
                message: "No restaurant found",
                data: [],
            };
        }
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
        return {
            success: false,
            message: "Oops! Something went wrong",
            error: `Restaurants could not be error: ${error.message}`,
        };
    }
});
exports.getAllRestaurants = getAllRestaurants;
// get a restaurant by id
const getOneRestaurantById = (restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("restaurant.services.getOneRestaurant");
    try {
        const response = yield prisma.restaurants.findUnique({
            where: {
                id: restaurantId,
            },
        });
        if (response) {
            return {
                success: true,
                message: "Restaurant found",
                data: response,
            };
        }
        else {
            return {
                success: false,
                message: "Restaurant not found",
                data: null,
            };
        }
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
        return {
            success: false,
            message: "Restaurant not found | error",
            error: `GetOneRestaurant failed | error: ${error.message}`,
        };
    }
});
exports.getOneRestaurantById = getOneRestaurantById;
