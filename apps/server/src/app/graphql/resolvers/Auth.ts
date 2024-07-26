import {  UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import {
  CurrentUser,
  CurrentToken,
  RequestUserDto,
  RolesGuard
} from '@nutri/server-auth';
import gql from 'graphql-tag';
import { GqlThrottlerGuard } from '../gql-throttler.guard';
import {
  AccountInfo,
  AuthLoginInput,
  AuthPasswordChangeInput,
  AuthPasswordResetConfirmationInput,
  AuthPasswordResetRequestInput,
  AuthRegisterInput,
} from '../models';
import { ConfigService } from '@nutri/server-config';
import { PrismaService } from '@nutri/server-db-client';
import { ApiErrors } from '@nutri/common-consts';
import { AuthService, AuthSession } from '@nutri/server-auth';
import { Request, Response } from 'express';

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

  @Mutation('authLogin')
  async login(
    @Context() context: { req: Request; res: Response },
    @Args('data') { email, password }: AuthLoginInput
  ): Promise<AuthSession> {
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
      roles: session.roles
    };
  }

  @Query()
  @UseGuards(RolesGuard())
  async accountInfo(@CurrentUser() reqUser: RequestUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: { email: true, password: true, googleProfile: true }
    });

    if (!user) throw new UnauthorizedException(ApiErrors.Codes.USER_NOT_FOUND);

    return {
      email: user.email,
      hasPassword: !!user.password,
      googleProfile: user.googleProfile as AccountInfo['googleProfile']
    } satisfies AccountInfo;
  }

  @Mutation()
  @UseGuards(RolesGuard())
  async authRefreshToken(
    @Context() { req, res }: { req: Request, res: Response },
  ) {
    // Auth Guard checks the correctness and presence
    const currentToken = (req.headers['authorization'] as string).replace('Bearer ', '');
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    const newTokens = await this.authService.refreshToken(refreshToken, currentToken);

    this._setRefreshTokenCookie(res, newTokens.refreshToken);

    return {
      accessToken: newTokens.accessToken,
    };
  }

  @Mutation()
  async authPasswordResetRequest(
    @Args('data') args: AuthPasswordResetRequestInput
  ) {
    return this.authService.requestPasswordReset(args.email);
  }

  @Mutation()
  async authPasswordResetConfirmation(
    @Args('data') args: AuthPasswordResetConfirmationInput
  ) {
    return this.authService.resetPassword(args.token, args.newPassword);
  }

  @Mutation()
  async authRegister(
    @Args('data') args: AuthRegisterInput,
    @Context() context: { req: Request }
  ) {
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

  @Mutation()
  @UseGuards(RolesGuard())
  async authLogout(
    @CurrentUser() reqUser: RequestUserDto,
    @CurrentToken() currentToken: string,
    @Args('refreshToken') refreshToken: string
  ) {
    await this.authService.logout(currentToken, refreshToken);
    return true;
  }

  @Mutation()
  @UseGuards(RolesGuard())
  async authPasswordChange(
    @Args('data') args: AuthPasswordChangeInput,
    @CurrentUser() reqUser: RequestUserDto
  ) {
    return this.authService.changePassword(
      reqUser.id,
      args.oldPassword,
      args.newPassword
    );
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

export const typeDefs = gql`
  extend type Query {
    accountInfo: AccountInfo!
  }

  extend type Mutation {
    authLogin(data: AuthLoginInput!): AuthSession!
    authRefreshToken(data: AuthRefreshTokenInput): RefreshToken!
    authPasswordResetRequest(data: AuthPasswordResetRequestInput!): Boolean
    authPasswordChange(data: AuthPasswordChangeInput!): Boolean
    authPasswordResetConfirmation(data: AuthPasswordResetConfirmationInput!): AuthSession!
    authRegister(data: AuthRegisterInput!): AuthSession!
    authLogout(refreshToken: String!): Boolean!
  }
  type AuthSession {
    userId: String!
    accessToken: String!
    refreshToken: String!
    roles: [String!]!
  }

  type RefreshToken {
    accessToken: String!
    refreshToken: String!
  }

  type GoogleProfile {
    name: String
    given_name: String
    family_name: String
    locale: String
    email: String
    picture: String
  }

  type AccountInfo {
    email: String
    hasPassword: Boolean!
    googleProfile: GoogleProfile
  }

  input AuthLoginInput {
    email: String!
    password: String!
  }

  input AuthRefreshTokenInput {
    refreshToken: String!
  }

  input AuthPasswordChangeInput {
    oldPassword: String!
    newPassword: String!
  }

  input AuthPasswordResetConfirmationInput {
    newPassword: String!
    token: String!
  }

  input AuthPasswordResetRequestInput {
    email: String!
  }

  input AuthRegisterInput {
    email: String!
    password: String!
  }
`;
