import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import {
  CurrentUser,
  CurrentToken,
  RequestUserDto,
  RolesGuard,
} from '@nutri/server-auth';
import gql from 'graphql-tag';
import { GqlThrottlerGuard } from '../gql-throttler.guard';
import {
  AccountInfo,
  AuthRefreshTokenInput,
  AuthLoginInput,
  AuthPasswordChangeInput,
  AuthPasswordResetConfirmationInput,
  AuthPasswordResetRequestInput,
  AuthRegisterInput,
  AuthSession,
} from '../models';
import { ConfigService } from '@nutri/server-config';
import { PrismaService } from '@nutri/server-db-client';
import { ApiErrors } from '@nutri/common-consts';
import { AuthService } from '@nutri/server-auth';
import { Request } from 'express';

@Resolver()
@UseGuards(GqlThrottlerGuard)
@Throttle({ default: { limit: 10, ttl: 30_000 } })
export class AuthResolver {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Query('authLogin')
  async login(
    @Context() context: { req: Request },
    @Args('data') { email, password }: AuthLoginInput,
  ): Promise<AuthSession> {
    return await this.authService.login({
      email,
      password,
      userAgent: 'not-production-ready',
      ipAddress: this._extractIpAddress(context.req),
    });
  }

  @Query()
  @UseGuards(RolesGuard())
  async accountInfo(@CurrentUser() reqUser: RequestUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: { email: true, password: true, googleProfile: true },
    });

    if (!user) throw new UnauthorizedException(ApiErrors.Codes.USER_NOT_FOUND);

    return {
      email: user.email,
      hasPassword: !!user.password,
      googleProfile: user.googleProfile as AccountInfo['googleProfile'],
    } satisfies AccountInfo;
  }

  @Query()
  @UseGuards(RolesGuard())
  async authRefreshToken(
    @CurrentUser() reqUser: RequestUserDto,
    @Args('data') args: AuthRefreshTokenInput,
    @CurrentToken() currentToken: string,
  ) {
    return this.authService.refreshToken(args.refreshToken, currentToken);
  }

  @Query()
  async authPasswordResetRequest(
    @Args('data') args: AuthPasswordResetRequestInput,
  ) {
    return this.authService.requestPasswordReset(args.email);
  }

  @Mutation()
  async authPasswordResetConfirmation(
    @Args('data') args: AuthPasswordResetConfirmationInput,
  ) {
    return this.authService.resetPassword(args.token, args.newPassword);
  }

  @Mutation()
  async authRegister(@Args('data') args: AuthRegisterInput) {
    if (!this.config.publicRegistration) {
      throw new UnauthorizedException('No public registrations allowed');
    }

    return await this.authService.register({
      email: args.email,
      password: args.password,
    });
  }

  @Mutation()
  @UseGuards(RolesGuard())
  async authPasswordChange(
    @Args('data') args: AuthPasswordChangeInput,
    @CurrentUser() reqUser: RequestUserDto,
  ) {
    return this.authService.changePassword(
      reqUser.id,
      args.oldPassword,
      args.newPassword,
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
}

export const typeDefs = gql`
  extend type Query {
    authLogin(data: AuthLoginInput!): AuthSession!
    authRefreshToken(data: AuthRefreshTokenInput): AuthSession!
    authPasswordResetRequest(data: AuthPasswordResetRequestInput!): Boolean
    accountInfo: AccountInfo!
  }

  extend type Mutation {
    authPasswordChange(data: AuthPasswordChangeInput!): Boolean
    authPasswordResetConfirmation(
      data: AuthPasswordResetConfirmationInput!
    ): AuthSession!
    authRegister(data: AuthRegisterInput!): AuthSession!
  }

  type AuthSession {
    userId: String!
    accessToken: String!
    refreshToken: String!
    roles: [String!]!
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
