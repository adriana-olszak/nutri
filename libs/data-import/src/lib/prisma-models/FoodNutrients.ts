import { PrismaClient } from "@prisma/client";

export class FoodNutrients {
  constructor(private readonly prismaFoodNutrient: PrismaClient['foodNutrient']) {
  }
}
