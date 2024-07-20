import { URLSearchParams } from 'url';

import { Controller, Get, Res, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { EmailTakenExceptionFilter } from './exception-filters/email-taken.exception-filter';
import { ConfigService } from '@nutri/server-config';
import { CurrentUser, RequestUserDto } from '@nutri/server-auth';

@Controller('auth')
@UseFilters(EmailTakenExceptionFilter)
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Guard redirects
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@CurrentUser() user: RequestUserDto, @Res() res: Response) {
    const url = await this.getLoginConfirmedURL(user);
    res.redirect(url);
  }

  async getLoginConfirmedURL(user: RequestUserDto) {
    const authSession = await this.auth.getAuthSession(user, false);
    const token = encodeURIComponent(authSession.token);
    const queryParams = new URLSearchParams({ token });
    return this.config.oauth!.loginConfirmedURL + '?' + queryParams;
  }
}
