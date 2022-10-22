import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all foods
const getAllFoods = async () => {
  try {
    console.log("food.service.getAllFoods");
    const data = await prisma.foods.findMany({});

    if (data && data.length > 0) {
      return {
        success: true,
        message: "Foods found successfully.",
        data: data,
      };
    } else {
      return {
        success: false,
        message: "No food found",
        data: [],
      };
    }
  } catch (error: any) {
    console.log(error?.message);
    return {
      success: false,
      message: "Oops! Something went wrong",
      error: `Foods could not be error: ${error.message}`,
    };
  }
};

// get a restaurant by id
const getOneFoodById = async (foodId: any) => {
  console.log("food.services.getOneRestaurant");
  try {
    const response = await prisma.foods.findUnique({
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
    } else {
      return {
        success: false,
        message: "Food not found",
        data: null,
      };
    }
  } catch (error: any) {
    console.log(error?.message);
    return {
      success: false,
      message: "Food not found | error",
      error: `GetOneFood failed | error: ${error.message}`,
    };
  }
};

export { getAllFoods, getOneFoodById };
