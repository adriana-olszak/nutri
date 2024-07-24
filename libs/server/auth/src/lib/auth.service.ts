import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException
} from '@nestjs/common';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@nutri/server-db-client';
import { TokenBlacklistService } from './token-blacklist.service';
import { SessionService } from './session.service';
import { AuthAuditLogService } from './auth-audit-log.service';
import { RefreshTokenService } from './refresh-token.service';
import { ErrorHandler } from '@nutri/server-utils';
import { AccessTokenService } from './access-token.service';
import { AuthSession } from './interfaces/auth-session';
import { ConfigService } from '@nutri/server-config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly errorHandler = new ErrorHandler(this.logger);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private tokenBlacklistService: TokenBlacklistService,
    private sessionService: SessionService,
    private loginLogService: AuthAuditLogService,
    private refreshTokenService: RefreshTokenService,
    private accessTokenService: AccessTokenService
  ) {
  }

  async login({
                email,
                password,
                ipAddress,
                userAgent
              }: {
    email: string;
    password: string;
    ipAddress: string;
    userAgent: string;
  }): Promise<AuthSession> {
    return this.prisma.$transaction(async (trx) => {
      try {
        const user = await this._validateUser(email, password, trx);
        if (!user) {
          await this.loginLogService.logFailedLogin(
            { email, ipAddress, userAgent },
            trx
          );
          throw new UnauthorizedException('Invalid credentials');
        }

        const session = await this.sessionService.createSession(
          { userId: user.id, ipAddress, deviceInfo: userAgent },
          trx
        );
        const accessToken = this.accessTokenService.generate({
          user,
          sessionId: session.id  // Include sessionId in the token payload
        });
        const { token: refreshToken } = await this.refreshTokenService.generate(
          { userId: user.id },
          trx
        );

        await this.loginLogService.logSuccessfulLogin(
          { userId: user.id, ipAddress, userAgent },
          trx
        );

        this.logger.log(`User ${user.id} logged in successfully`);
        return {
          userId: user.id,
          roles: user.roles,
          accessToken,
          refreshToken
        };
      } catch (error: unknown) {
        return this.errorHandler.handleError(error, 'Login attempt failed');
      }
    });
  }

  async register({
                   email,
                   password,
                   ipAddress,
                   userAgent
                 }: {
    email: string;
    password: string;
    ipAddress: string;
    userAgent: string;
  }): Promise<AuthSession> {
    return this.prisma.$transaction(async (trx) => {
      try {
        const existingUser = await trx.user.findUnique({
          where: { email: email.toLowerCase() }
        });

        if (existingUser) {
          throw new BadRequestException('User already exists');
        }

        const hashedPassword = await this.hashPassword(password);

        const newUser = await trx.user.create({
          data: {
            email: email.toLowerCase(),
            password: hashedPassword,
            roles: ['USER'] // Assign default role
          },
          select: { id: true, email: true, roles: true }
        });

        const session = await this.sessionService.createSession(
          { userId: newUser.id, ipAddress, deviceInfo: userAgent },
          trx
        );

        const accessToken = this.accessTokenService.generate({
          user: newUser,
          sessionId: session.id
        });
        const { token: refreshToken } = await this.refreshTokenService.generate(
          { userId: newUser.id },
          trx
        );

        await this.loginLogService.logSuccessfulLogin(
          { userId: newUser.id, ipAddress, userAgent },
          trx
        );

        this.logger.log(`User ${newUser.id} registered and logged in successfully`);

        return {
          userId: newUser.id,
          roles: newUser.roles,
          accessToken,
          refreshToken
        };
      } catch (error: unknown) {
        return this.errorHandler.handleError(error, 'Registration failed');
      }
    });
  }

  async logout(accessToken: string, refreshToken: string) {
    return this.prisma.$transaction(async (trx) => {
      try {
        const decodedToken = this.jwtService.decode(accessToken) as {
          exp: number;
          sub: string;
          sessionId: string;  // Extract sessionId from the token
        };
        const expirationDate = new Date(decodedToken.exp * 1000);
        const sessionId = decodedToken.sessionId;

        await Promise.all([
          this.tokenBlacklistService.blacklistToken(
            { token: accessToken, expiresAt: expirationDate },
            trx
          ),
          this.refreshTokenService.revoke({ token: refreshToken }, trx),
          this.sessionService.endSession({ sessionId }, trx)
        ]);

        this.logger.log(`User ${decodedToken.sub} logged out successfully from session ${sessionId}`);
      } catch (error: unknown) {
        return this.errorHandler.handleError(error, 'Logout attempt failed');
      }
    });
  }

  async requestPasswordReset(email: string): Promise<void> {
    return this.prisma.$transaction(async (trx) => {
      try {
        const user = await trx.user.findUnique({
          where: { email: email.toLowerCase() }
        });
        if (!user) {
          // Don't reveal that the user doesn't exist
          return;
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

        await trx.passwordResetToken.create({
          data: {
            token,
            userId: user.id,
            expiresAt
          }
        });

        // Here you would send an email with the reset link
        // this.emailService.sendPasswordResetEmail(user.email, token);

        this.logger.log(`Password reset requested for user ${user.id}`);
      } catch (error: unknown) {
        this.errorHandler.handleError(error, 'Password reset request failed');
      }
    });
  }

  async resetPassword(token: string, newPassword: string) {
    return this.prisma.$transaction(async (trx) => {
      try {
        const passwordReset = await trx.passwordResetToken.findUnique({
          where: { token },
          include: { user: true }
        });

        if (!passwordReset || passwordReset.expiresAt < new Date()) {
          throw new UnauthorizedException(
            'Invalid or expired password reset token'
          );
        }

        const hashedPassword = await this.hashPassword(newPassword);

        await trx.user.update({
          where: { id: passwordReset.userId },
          data: { password: hashedPassword }
        });

        await trx.passwordResetToken.delete({
          where: { id: passwordReset.id }
        });

        this.logger.log(
          `Password reset successful for user ${passwordReset.userId}`
        );
      } catch (error: unknown) {
        this.errorHandler.handleError(error, 'Password reset failed');
      }
    });
  }

  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    return this.prisma.$transaction(async (trx) => {
      try {
        const user = await trx.user.findUnique({ where: { id: userId } });

        if (!user || !user.password) {
          throw new UnauthorizedException(
            'User not found or has no password set'
          );
        }

        const isOldPasswordValid = await this._verifyPassword(
          oldPassword,
          user.password
        );
        if (!isOldPasswordValid) {
          throw new UnauthorizedException('Invalid old password');
        }

        const hashedNewPassword = await this.hashPassword(newPassword);

        await trx.user.update({
          where: { id: userId },
          data: { password: hashedNewPassword }
        });

        this.logger.log(`Password changed successfully for user ${userId}`);
      } catch (error: unknown) {
        this.errorHandler.handleError(error, 'Password change failed');
      }
    });
  }

  async refreshToken(oldRefreshToken: string, currentAccessToken: string) {
    try {
      return await this.prisma.$transaction(async (trx) => {
        const decodedCurrentToken = this.jwtService.decode(currentAccessToken) as {
          exp: number;
          sub: string;
          sessionId: string;
        };

        const newRefreshToken = await this.refreshTokenService.rotate(
          { oldToken: oldRefreshToken },
          trx
        );
        const { userId } = await this.refreshTokenService.validate(
          { token: newRefreshToken },
          trx
        );
        const user = await trx.user.findUnique({ where: { id: userId } });

        if (!user) {
          throw new UnauthorizedException('User not found');
        }

        // Include the sessionId from the current token in the new token
        const newAccessToken = this.accessTokenService.generate({
          user,
          sessionId: decodedCurrentToken.sessionId
        });

        this.logger.log(`Tokens refreshed for user ${userId} in session ${decodedCurrentToken.sessionId}`);
        return { accessToken: newAccessToken, refreshToken: newRefreshToken };
      });
    } catch (error: unknown) {
      // If there's an error, we should blacklist the current access token
      try {
        const decodedToken = this.jwtService.decode(currentAccessToken) as {
          exp: number;
          sub: string;
          sessionId: string;
        };
        const expirationDate = new Date(decodedToken.exp * 1000);

        // Blacklist the token outside of the transaction
        await this.tokenBlacklistService.blacklistToken({
          token: currentAccessToken,
          expiresAt: expirationDate
        });

        this.logger.log(
          `Access token blacklisted for user ${decodedToken.sub} in session ${decodedToken.sessionId} due to refresh token error`
        );
      } catch (blacklistError) {
        this.logger.error('Failed to blacklist access token', blacklistError);
      }

      // Rethrow the original error
      return this.errorHandler.handleError(error, 'Token refresh failed');
    }
  }

  private async _validateUser(email: string, password: string, trx?: any) {
    const user = await (trx || this.prisma).user.findUnique({
      where: { email: email.toLowerCase() },
      select: { id: true, email: true, password: true, roles: true }
    });

    if (!user) return null;
    if (!user.password) {
      throw new UnauthorizedException(
        'This account uses Google Sign-In. Please log in with Google.'
      );
    }

    if (await this._verifyPassword(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  private async _verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(
      password,
      this.configService.bcrypt?.costFactor
        ? this.configService.bcrypt.costFactor
        : 12
    );
  }
}
