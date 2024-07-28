import { PrismaClient } from "@prisma/client";

export class FoodPortions {
  constructor(private readonly prismaFoodPortion: PrismaClient['foodPortion']) {
  }
}
