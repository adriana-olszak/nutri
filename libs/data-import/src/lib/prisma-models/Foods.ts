import { PrismaClient } from "@prisma/client";

export class Foods {
  constructor(private readonly prismaFood: PrismaClient['food']) {
  }
}
