import { PrismaClient } from "@prisma/client";

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
const getOneRestaurantById = async (restaurantId: any) => {
  console.log("restaurant.services.getOneRestaurant");
  try {
    const response = await prisma.restaurants.findUnique({
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
    } else {
      return {
        success: false,
        message: "Restaurant not found",
        data: null,
      };
    }
  } catch (error: any) {
    console.log(error?.message);
    return {
      success: false,
      message: "Restaurant not found | error",
      error: `GetOneRestaurant failed | error: ${error.message}`,
    };
  }
};

export { getAllRestaurants, getOneRestaurantById };
