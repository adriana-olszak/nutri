import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import {
  CurrentUser,
  CurrentToken,
  RequestUserDto,
  RolesGuard
} from '@nutri/server-auth';
import { GqlThrottlerGuard } from '../gql-throttler.guard';
import { ConfigService } from '@nutri/server-config';
import { PrismaService } from '@nutri/server-db-client';
import { ApiErrors } from '@nutri/common-consts';
import { AuthService } from '@nutri/server-auth';
import { Request, Response } from 'express';
import { AuthLoginInput } from '../inputs/auth/auth-login.input';
import { AuthPasswordResetRequestInput } from '../inputs/auth/auth-password-reset-request.input';
import { AuthPasswordResetConfirmationInput } from '../inputs/auth/auth-password-reset-confirmation.input';
import { AuthRegisterInput } from '../inputs/auth/auth-register.input';
import { AuthPasswordChangeInput } from '../inputs/auth/auth-password-change.input';
import { AuthSessionModel } from '../models/auth/auth-session.model';
import { AuthAccountInfoModel } from '../models/auth/auth-account-info.model';
import { AuthRefreshTokenModel } from '../models/auth/auth-refresh-token.model';

@Resolver()
@UseGuards(GqlThrottlerGuard)
@Throttle({ default: { limit: 10, ttl: 30_000 } })
export class AuthResolver {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {
  }

  @Mutation(() => AuthSessionModel, { name: 'authLogin' })
  async login(
    @Context() context: { req: Request; res: Response },
    @Args('data') { email, password }: AuthLoginInput
  ): Promise<AuthSessionModel> {
    const session = await this.authService.login({
      email,
      password,
      userAgent: context.req.headers['user-agent'] || 'unknown',
      ipAddress: this._extractIpAddress(context.req)
    });

    this._setRefreshTokenCookie(context.res, session.refreshToken);

    return {
      userId: session.userId,
      accessToken: session.accessToken,
      roles: session.roles,
      accessTokenExpiresAt: session.accessTokenExpiresAt
    };
  }

  @Query(() => AuthAccountInfoModel)
  @UseGuards(RolesGuard())
  async accountInfo(@CurrentUser() reqUser: RequestUserDto): Promise<AuthAccountInfoModel> {
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: { email: true, password: true, googleProfile: true }
    });

    if (!user) throw new UnauthorizedException(ApiErrors.Codes.USER_NOT_FOUND);
    const googleProfile = user.googleProfile ? JSON.parse(user.googleProfile as string) : null;
    return {
      email: user.email,
      hasPassword: !!user.password,
      googleProfile: googleProfile ? {
        email: googleProfile.email,
        family_name: googleProfile.family_name,
        name: googleProfile.name,
        given_name: googleProfile.given_name,
        locale: googleProfile.locale,
        picture: googleProfile.picture
      } : undefined
    };
  }

  @Mutation(() => AuthRefreshTokenModel)
  async authRefreshToken(
    @Context() { req, res }: { req: Request, res: Response }
  ): Promise<AuthRefreshTokenModel> {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    const newTokens = await this.authService.refreshToken(refreshToken);

    this._setRefreshTokenCookie(res, newTokens.refreshToken);

    return {
      accessToken: newTokens.accessToken,
      accessTokenExpiresAt: newTokens.accessTokenExpiresAt
    };
  }

  @Mutation(() => Boolean)
  async authPasswordResetRequest(
    @Args('data') args: AuthPasswordResetRequestInput
  ): Promise<true> {
    await this.authService.requestPasswordReset(args.email);
    return true;
  }

  @Mutation(() => Boolean)
  async authPasswordResetConfirmation(
    @Args('data') args: AuthPasswordResetConfirmationInput
  ): Promise<true> {
    await this.authService.resetPassword(args.token, args.newPassword);
    return true;
  }

  @Mutation(() => AuthSessionModel)
  async authRegister(
    @Args('data') args: AuthRegisterInput,
    @Context() context: { req: Request }
  ): Promise<AuthSessionModel> {
    if (!this.config.publicRegistration) {
      throw new UnauthorizedException('No public registrations allowed');
    }

    return await this.authService.register({
      email: args.email,
      password: args.password,
      ipAddress: this._extractIpAddress(context.req),
      userAgent: context.req.headers['user-agent'] || 'unknown'
    });
  }

  @Mutation(() => Boolean)
  @UseGuards(RolesGuard())
  async authLogout(
    @Context() { req }: { req: Request },
    @CurrentToken() currentToken: string
  ) {
    const refreshToken = req.cookies['refreshToken'];
    await this.authService.logout(currentToken, refreshToken);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(RolesGuard())
  async authPasswordChange(
    @Args('data') args: AuthPasswordChangeInput,
    @CurrentUser() reqUser: RequestUserDto
  ): Promise<true> {
    await this.authService.changePassword(
      reqUser.id,
      args.oldPassword,
      args.newPassword
    );
    return true;
  }

  private _extractIpAddress(req: Request): string {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (forwardedFor) {
      const ips = (forwardedFor as string).split(',').map((ip) => ip.trim());
      return ips[0];
    }
    return req.ip || 'Unknown';
  }

  private _setRefreshTokenCookie(res: Response, token: string) {
    res.cookie('refreshToken', token, {
      httpOnly: true,
      secure: this.config.isProd,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
  }
}
