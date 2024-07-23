import { PrismaService } from '@nutri/server-db-client';
import { MockedFunction } from 'jest-mock';

type MockPrismaServiceProperties = {
  [K in keyof PrismaService]: PrismaService[K] extends (...args: any[]) => any
    ? MockedFunction<PrismaService[K]>
    : {
        [SubK in keyof PrismaService[K]]: PrismaService[K][SubK] extends (
          ...args: any[]
        ) => any
          ? MockedFunction<PrismaService[K][SubK]>
          : PrismaService[K][SubK];
      };
};

export type MockPrismaService = MockPrismaServiceProperties & PrismaService;
