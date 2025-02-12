import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { DatabaseErrorCode, DatabaseException, EntityNotFoundException, ForeignKeyException, UniqueConstraintException } from '../database.exceptions';
import { BaseErrorHandler } from './base.error-handler';


export interface DatabaseErrorContext {
  operation: string;
  entityId?: string;
  data?: unknown;
  [key: string]: unknown;
}

export class DatabaseErrorHandler extends BaseErrorHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  handle(error: unknown, entity: string, context: DatabaseErrorContext): never {
    const transformedError = this.transformError(error, entity);

    this.logError(
      `[error-handler] Failed to ${context.operation} ${entity}${context.entityId ? `:${context.entityId}` : ''}`,
      error,
      context
    );

    throw transformedError;
  }

  private handlePrismaKnownError(error: PrismaClientKnownRequestError, entity: string) {
    switch (error.code) {
      case 'P2002':{ // Unique constraint violation
        const field = (error.meta?.["target"] as string[])?.[0] ?? 'unknown';
        return new UniqueConstraintException(
          entity,
          field,
          'value',
          error,
          { constraint: error.meta?.["target"] }
        );
      }
      // Foreign key constraint violation
      case 'P2003': {
        const fkField = (error.meta?.["field_name"] as string) ?? 'unknown';
        return new ForeignKeyException(
          entity,
          fkField,
          'value',
          error,
          { field: error.meta?.["field_name"] }
        );
      }
      case 'P2025': // Record not found
        return new EntityNotFoundException(
          entity,
          'id',
          error
        );

      default:
        return new DatabaseException(
          DatabaseErrorCode.UNKNOWN,
          `Database error occurred while operating on ${entity}`,
          error,
          { prismaCode: error.code }
        );
    }
  }

  private transformError(error: unknown, entity: string): DatabaseException {
      if (error instanceof PrismaClientKnownRequestError) {
        return this.handlePrismaKnownError(error, entity);
      }

      if (error instanceof Prisma.PrismaClientValidationError) {
        return new DatabaseException(
          DatabaseErrorCode.QUERY,
          `Invalid query for ${entity}`,
          error
        );
      }

      if (error instanceof Prisma.PrismaClientInitializationError) {
        return new DatabaseException(
          DatabaseErrorCode.CONNECTION,
          'Failed to initialize database connection',
          error
        );
      }

      return new DatabaseException(
        DatabaseErrorCode.UNKNOWN,
        `Unexpected error occurred while operating on ${entity}`,
        error
      );
    }

}
