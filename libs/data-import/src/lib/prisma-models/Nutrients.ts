import { PrismaClient } from "@prisma/client";

export class Nutrients {
  constructor(private readonly prismaNutrient: PrismaClient['nutrient']) {
  }
}
