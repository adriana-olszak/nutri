import { PrismaClient } from '@prisma/client';

export * from './lib/prisma.service';
export * from './lib/db-client.module';
export * from '@prisma/client';
export * from './lib/prisma-select.service';

export type PrismaTransactionalClient = Parameters<
  Parameters<PrismaClient['$transaction']>[0]
>[0];
