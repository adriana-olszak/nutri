import { PrismaClient } from "@prisma/client";

export class Languages {
  constructor(private readonly prismaLanguage: PrismaClient['language']) {
  }
}
