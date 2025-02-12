import { BaseException } from './base.exception';

export class DatabaseException extends BaseException {
  constructor(
    code: DatabaseErrorCode,
    message: string,
    cause?: unknown,
    metadata?: Record<string, unknown>
  ) {
    super(`DB_${code}`, message, cause, metadata);
  }
}

export enum DatabaseErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  UNIQUE_CONSTRAINT = 'UNIQUE_CONSTRAINT',
  FOREIGN_KEY = 'FOREIGN_KEY',
  CONNECTION = 'CONNECTION',
  QUERY = 'QUERY',
  TRANSACTION = 'TRANSACTION',
  UNKNOWN = 'UNKNOWN',
}

export class EntityNotFoundException extends DatabaseException {
  constructor(
    entity: string,
    identifier: string | number,
    cause?: unknown,
    metadata?: Record<string, unknown>
  ) {
    super(
      DatabaseErrorCode.NOT_FOUND,
      `${entity} with identifier ${identifier} not found`,
      cause,
      metadata
    );
  }
}

export class UniqueConstraintException extends DatabaseException {
  constructor(
    entity: string,
    field: string,
    value: string | number,
    cause?: unknown,
    metadata?: Record<string, unknown>
  ) {
    super(
      DatabaseErrorCode.UNIQUE_CONSTRAINT,
      `${entity} with ${field} '${value}' already exists`,
      cause,
      metadata
    );
  }
}

export class ForeignKeyException extends DatabaseException {
  constructor(
    entity: string,
    field: string,
    value: string | number,
    cause?: unknown,
    metadata?: Record<string, unknown>
  ) {
    super(
      DatabaseErrorCode.FOREIGN_KEY,
      `Referenced ${entity} with ${field} '${value}' does not exist`,
      cause,
      metadata
    );
  }
}
