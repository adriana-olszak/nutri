import { MockedObject } from 'jest-mock';
import { PrismaService } from '@nutri/server-db-client';

type DeepMockProxy<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? jest.MockedFunction<T[K]>
    : T[K] extends object
      ? DeepMockProxy<T[K]>
      : T[K];
};

export type MockPrismaService = MockedObject<DeepMockProxy<PrismaService>>;
