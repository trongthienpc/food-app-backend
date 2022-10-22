import {
  USERNAME_EXIST,
  EMAIL_EXIST,
  REGISTERED_FAILED,
  REGISTERED_SUCCESS,
} from "../configs/constants";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// get all restaurants
const getAllRestaurants = async () => {
  try {
    console.log("restaurant.service.getAllRestaurants");
    const data = await prisma.restaurants.findMany({});
    if (data && data.length > 0) {
      return {
        success: true,
        message: "Restaurants found successfully.",
        data: data,
      };
    } else {
      return {
        success: false,
        message: "No restaurant found",
        data: [],
      };
    }
  } catch (error: any) {
    console.log(error?.message);
    return {
      success: false,
      message: "Oops! Something went wrong",
      error: `Restaurants could not be error: ${error.message}`,
    };
  }
};

// get a restaurant by id
const getOneRestaurantById = async () => {};

export { getAllRestaurants, getOneRestaurantById };
