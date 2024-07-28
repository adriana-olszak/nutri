import { PrismaClient } from "@prisma/client";

export class InputFoods {
  constructor(private readonly prismaInputFood: PrismaClient['inputFood']) {
  }
}
