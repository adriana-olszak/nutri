import { TestBed } from '@automock/jest';
import { Type } from '@nestjs/common';

export function createTestBed<T>(TestSubject: Type<T>) {
  return TestBed.create(TestSubject).compile();
}
