import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { BaseErrorHandler } from './base.error-handler';

@Injectable()
export class ValidationErrorHandler extends BaseErrorHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  handle(errors: ValidationError[], message?: string): never {
    const formattedErrors = this.formatValidationErrors(errors);
    this.logError(`[error-handler] ${message || 'Validation failed'}`, formattedErrors);
    throw new BadRequestException(formattedErrors);
  }

  private formatValidationErrors(errors: ValidationError[]): Record<string, string[]> {
    return errors.reduce((acc, error) => {
      acc[error.property] = Object.values(error.constraints || {});
      return acc;
    }, {} as Record<string, string[]>);
  }
}
