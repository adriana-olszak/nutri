// src/utils/error-handler.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { Logger, InternalServerErrorException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ErrorHandler } from './error-handler';

describe('ErrorHandler', () => {
  let errorHandler: ErrorHandler;
  let logger: jest.Mocked<Logger>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ErrorHandler,
        {
          provide: Logger,
          useValue: {
            error: jest.fn()
          }
        }
      ]
    }).compile();

    errorHandler = module.get<ErrorHandler>(ErrorHandler);
    logger = module.get(Logger);
  });

  it('should be defined', () => {
    expect(errorHandler).toBeDefined();
  });

  it('should rethrow HttpExceptions', () => {
    const httpException = new HttpException('Test exception', HttpStatus.BAD_REQUEST);
    expect(() => errorHandler.handleError(httpException, 'Test message')).toThrow(HttpException);
    expect(logger.error).not.toHaveBeenCalled();
  });

  it('should handle PrismaClientKnownRequestError', () => {
    const prismaError = new PrismaClientKnownRequestError('Prisma error', {
      code: 'P2002',
      clientVersion: '2.19.0'
    });
    expect(() => errorHandler.handleError(prismaError, 'Test message')).toThrow(InternalServerErrorException);
    expect(logger.error).toHaveBeenCalledWith(`Database error: ${prismaError.code} - ${prismaError.message}`);
  });

  it('should handle unknown errors', () => {
    const unknownError = new Error('Unknown error');
    expect(() => errorHandler.handleError(unknownError, 'Test message')).toThrow(InternalServerErrorException);
    expect(logger.error).toHaveBeenCalledWith(`Test message: Unknown error`, unknownError.stack);
  });

  it('should handle non-Error objects', () => {
    const nonError = { message: 'Not an error' };
    expect(() => errorHandler.handleError(nonError, 'Test message')).toThrow(InternalServerErrorException);
    expect(logger.error).toHaveBeenCalledWith('Test message: [object Object]', undefined);
  });

  it('should handle primitive values', () => {
    expect(() => errorHandler.handleError('String error', 'Test message')).toThrow(InternalServerErrorException);
    expect(logger.error).toHaveBeenCalledWith('Test message: String error', undefined);
  });
});
