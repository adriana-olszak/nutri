import { Logger } from '@nestjs/common';

export abstract class BaseErrorHandler {
  constructor(protected readonly logger: Logger) {}

  protected getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  protected getErrorStack(error: unknown): string | undefined {
    if (error instanceof Error) return error.stack;
    return undefined;
  }

  protected logError(message: string, error: unknown, context?: Record<string, unknown>): void {
    this.logger.error(
      `${message}: ${this.getErrorMessage(error)}`,
      this.getErrorStack(error),
      context
    );
  }
}
