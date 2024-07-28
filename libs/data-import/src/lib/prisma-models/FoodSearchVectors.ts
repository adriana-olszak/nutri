import { PrismaClient } from "@prisma/client";

export class FoodSearchVectors {
  constructor(private readonly prismaFoodSearchVector: PrismaClient['foodSearchVector']) {
  }
}
