import { PrismaClient } from '@prisma/client';

export * from '@prisma/client';
export * from './lib/base.repository';
export * from './lib/db-client.module';
export * from './lib/prisma.service';
export * from './lib/transaction.service';

export type PrismaTransactionalClient = Parameters<
  Parameters<PrismaClient['$transaction']>[0]
>[0];
