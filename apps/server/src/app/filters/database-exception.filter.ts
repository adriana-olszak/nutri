import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
} from '@nestjs/common';
import { DatabaseErrorCode, DatabaseException } from '@nutri/server-shared';
import { Response } from 'express';

@Catch(DatabaseException)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: DatabaseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    // Map database error codes to HTTP status codes
    switch (exception.code) {
      case `DB_${DatabaseErrorCode.NOT_FOUND}`:
        status = HttpStatus.NOT_FOUND;
        break;
      case `DB_${DatabaseErrorCode.UNIQUE_CONSTRAINT}`:
        status = HttpStatus.CONFLICT;
        break;
      case `DB_${DatabaseErrorCode.FOREIGN_KEY}`:
        status = HttpStatus.BAD_REQUEST;
        break;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      ...exception.toJSON(),
    });
  }
}
