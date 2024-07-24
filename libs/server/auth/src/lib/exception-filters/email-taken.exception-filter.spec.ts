import { EmailTakenException, EmailTakenExceptionFilter } from './email-taken.exception-filter';
import { ConfigService } from '@nutri/server-config';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

describe('EmailTakenExceptionFilter', () => {
  let filter: EmailTakenExceptionFilter;
  let responseMock: Partial<Response>;
  let configServiceMock: Partial<ConfigService>;

  beforeEach(() => {
    responseMock = {
      redirect: jest.fn()
    };
    configServiceMock = {};
    filter = new EmailTakenExceptionFilter(configServiceMock as ConfigService);
  });

  afterEach(()=> {
    jest.resetAllMocks()
  })

  it('should redirect to login with email_taken query param on EmailTakenException', () => {
    const exception = new EmailTakenException();
    filter.catch(exception, {
      switchToHttp: () => ({
        getResponse: () => responseMock
      })
    } as any);

    expect(responseMock.redirect).toHaveBeenCalledWith(`/login?email_taken=true`);
  });

  it('should not redirect for other types of HttpException', () => {
    const exception = new HttpException('Not Found', HttpStatus.NOT_FOUND);
    filter.catch(exception, {
      switchToHttp: () => ({
        getResponse: () => responseMock
      })
    } as any);

    expect(responseMock.redirect).not.toHaveBeenCalled();
  });
});
