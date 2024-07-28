import { PrismaClient } from "@prisma/client";

export class DataSourceReferences {
  constructor(private readonly prismaDataSourceReference: PrismaClient['dataSourceReference']) {
  }
}
