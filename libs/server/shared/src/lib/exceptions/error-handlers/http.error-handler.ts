import { HttpException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { BaseErrorHandler } from './base.error-handler';

@Injectable()
export class HttpErrorHandler extends BaseErrorHandler {
  constructor(logger: Logger) {
    super(logger);
  }

  handle(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      this.logError(`[error-handler] HTTP error: ${message}`, error);
      throw error;
    }

    this.logError(`[error-handler] Unexpected HTTP error: ${message}`, error);
    throw new InternalServerErrorException(message);
  }
}
