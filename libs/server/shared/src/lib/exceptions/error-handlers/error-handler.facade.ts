import { Logger } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { DatabaseErrorContext, DatabaseErrorHandler } from './database.error-handler';
import { HttpErrorHandler } from './http.error-handler';
import { ValidationErrorHandler } from './validation.error-handler';

export class ErrorHandlerFacade {
  private readonly databaseHandler: DatabaseErrorHandler;
  private readonly httpHandler: HttpErrorHandler;
  private readonly validationHandler: ValidationErrorHandler;

  constructor(logger: Logger) {
    this.databaseHandler = new DatabaseErrorHandler(logger);
    this.httpHandler = new HttpErrorHandler(logger);
    this.validationHandler = new ValidationErrorHandler(logger);
  }

  handleDatabaseError(error: unknown, entity: string, operation: DatabaseErrorContext): never {
    return this.databaseHandler.handle(error, entity, operation);
  }

  handleHttpError(error: unknown, message: string): never {
    return this.httpHandler.handle(error, message);
  }

  handleValidationError(errors: ValidationError[], message?: string): never {
    return this.validationHandler.handle(errors, message);
  }
}
