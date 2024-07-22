import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
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
    private accessTokenService: AccessTokenService,
  ) {}

  async login({
    email,
    password,
    ipAddress,
    userAgent,
  }: {
    email: string;
    password: string;
    ipAddress: string;
    userAgent: string;
  }): Promise<AuthSession> {
    try {
      const user = await this._validateUser(email, password);
      if (!user) {
        await this.loginLogService.logFailedLogin(email, ipAddress, userAgent);
        throw new UnauthorizedException('Invalid credentials');
      }

      await this.sessionService.createSession(user.id, ipAddress, userAgent);
      const accessToken = this.accessTokenService.generate(user);
      const { token: refreshToken } = await this.refreshTokenService.generate(
        user.id,
      );

      await this.loginLogService.logSuccessfulLogin(
        user.id,
        ipAddress,
        userAgent,
      );

      this.logger.log(`User ${user.id} logged in successfully`);
      return { userId: user.id, roles: user.roles, accessToken, refreshToken };
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Login attempt failed');
    }
  }

  async register({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AuthSession> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      const hashedPassword = await this.hashPassword(password);

      const newUser = await this.prisma.user.create({
        data: {
          email: email.toLowerCase(),
          password: hashedPassword,
          roles: ['USER'], // Assign default role
        },
        select: { id: true, email: true, roles: true },
      });

      const accessToken = this.accessTokenService.generate(newUser);
      const { token: refreshToken } = await this.refreshTokenService.generate(
        newUser.id,
      );

      this.logger.log(`User ${newUser.id} registered successfully`);

      return {
        userId: newUser.id,
        roles: newUser.roles,
        accessToken,
        refreshToken,
      };
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Registration failed');
    }
  }

  async logout(accessToken: string, refreshToken: string, sessionId: string) {
    try {
      const decodedToken = this.jwtService.decode(accessToken) as {
        exp: number;
        sub: string;
      };
      const expirationDate = new Date(decodedToken.exp * 1000);

      await Promise.all([
        this.tokenBlacklistService.blacklistToken(accessToken, expirationDate),
        this.refreshTokenService.revoke(refreshToken),
        this.sessionService.endSession(sessionId),
      ]);

      this.logger.log(`User ${decodedToken.sub} logged out successfully`);
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Login attempt failed');
    }
  }

  async requestPasswordReset(email: string): Promise<void> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });
      if (!user) {
        // Don't reveal that the user doesn't exist
        return;
      }

      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

      await this.prisma.passwordResetToken.create({
        data: {
          token,
          userId: user.id,
          expiresAt,
        },
      });

      // Here you would send an email with the reset link
      // this.emailService.sendPasswordResetEmail(user.email, token);

      this.logger.log(`Password reset requested for user ${user.id}`);
    } catch (error: unknown) {
      this.errorHandler.handleError(error, 'Password reset request failed');
    }
  }

  async resetPassword(token: string, newPassword: string) {
    try {
      const passwordReset = await this.prisma.passwordResetToken.findUnique({
        where: { token },
        include: { user: true },
      });

      if (!passwordReset || passwordReset.expiresAt < new Date()) {
        throw new UnauthorizedException(
          'Invalid or expired password reset token',
        );
      }

      const hashedPassword = await this.hashPassword(newPassword);

      const user = await this.prisma.user.update({
        where: { id: passwordReset.userId },
        data: { password: hashedPassword },
      });

      await this.prisma.passwordResetToken.delete({
        where: { id: passwordReset.id },
      });

      this.logger.log(
        `Password reset successful for user ${passwordReset.userId}`,
      );
    } catch (error: unknown) {
      this.errorHandler.handleError(error, 'Password reset failed');
    }
  }

  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<void> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!user || !user.password) {
        throw new UnauthorizedException(
          'User not found or has no password set',
        );
      }

      const isOldPasswordValid = await this._verifyPassword(
        oldPassword,
        user.password,
      );
      if (!isOldPasswordValid) {
        throw new UnauthorizedException('Invalid old password');
      }

      const hashedNewPassword = await this.hashPassword(newPassword);

      await this.prisma.user.update({
        where: { id: userId },
        data: { password: hashedNewPassword },
      });

      this.logger.log(`Password changed successfully for user ${userId}`);
    } catch (error: unknown) {
      this.errorHandler.handleError(error, 'Password change failed');
    }
  }

  async refreshToken(oldRefreshToken: string) {
    try {
      const newRefreshToken = await this.refreshTokenService.rotate(
        oldRefreshToken,
      );
      const { userId } = await this.refreshTokenService.validate(
        newRefreshToken,
      );
      const user = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const newAccessToken = this.accessTokenService.generate(user);

      this.logger.log(`Tokens refreshed for user ${userId}`);
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error: unknown) {
      return this.errorHandler.handleError(error, 'Login attempt failed');
    }
  }

  private async _validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      select: { id: true, email: true, password: true, roles: true },
    });

    if (!user) return null;
    if (!user.password) {
      throw new UnauthorizedException(
        'This account uses Google Sign-In. Please log in with Google.',
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
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(
      password,
      this.configService.bcrypt?.costFactor
        ? this.configService.bcrypt.costFactor
        : 12,
    );
  }
}
