export class BaseException extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly cause?: unknown,
    public readonly metadata?: Record<string, unknown>
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON() {
    return {
      code: this.code,
      message: this.message,
      ...(this.metadata && { metadata: this.metadata }),
    };
  }
}
