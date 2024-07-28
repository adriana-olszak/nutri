import { PrismaClient } from "@prisma/client";

export class FoodCategories {
  constructor(private readonly prismaFoodCategory: PrismaClient['foodCategory']) {
  }
}
