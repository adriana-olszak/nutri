import { Logger, InternalServerErrorException, HttpException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export class ErrorHandler {
  constructor(private readonly logger: Logger) {
  }

  handleError(error: unknown, message: string): never {
    if (error instanceof HttpException) {
      // Rethrow HTTP exceptions as they are
      throw error;
    }

    if (error instanceof PrismaClientKnownRequestError) {
      // Handle specific Prisma errors
      this.logger.error(`Database error: ${error.code} - ${error.message}`);
      throw new InternalServerErrorException('A database error occurred');
    }

    // For any other type of error
    this.logger.error(`${message}: ${this.getErrorMessage(error)}`, this.getErrorStack(error));
    throw new InternalServerErrorException(message);
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  private getErrorStack(error: unknown): string | undefined {
    if (error instanceof Error) return error.stack;
    return undefined;
  }
}
