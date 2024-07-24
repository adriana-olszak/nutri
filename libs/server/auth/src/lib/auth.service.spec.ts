import { TestBed } from '@automock/jest';
import { AuthService } from './auth.service';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nutri/server-config';
import { TokenBlacklistService } from './token-blacklist.service';
import { SessionService } from './session.service';
import { AuthAuditLogService } from './auth-audit-log.service';
import { RefreshTokenService } from './refresh-token.service';
import { AccessTokenService } from './access-token.service';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  userFactory,
  refreshTokenFactory,
  sessionFactory,
  passwordResetTokenFactory, MockPrismaService
} from '@nutri/server-testing';
import { User } from '@prisma/client';
import { faker } from '@faker-js/faker';

jest.mock('bcrypt');

describe('AuthService', () => {
  let authService: AuthService;
  let prismaMock: MockPrismaService;
  let jwtServiceMock: jest.Mocked<JwtService>;
  let tokenBlacklistServiceMock: jest.Mocked<TokenBlacklistService>;
  let sessionServiceMock: jest.Mocked<SessionService>;
  let authAuditLogServiceMock: jest.Mocked<AuthAuditLogService>;
  let refreshTokenServiceMock: jest.Mocked<RefreshTokenService>;
  let accessTokenServiceMock: jest.Mocked<AccessTokenService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(AuthService)
      .mock(PrismaService)
      .using({
        $transaction: jest.fn((callback) => callback(prismaMock)),
        user: {
          findUnique: jest.fn(),
          create: jest.fn(),
          update: jest.fn()
        },
        passwordResetToken: {
          create: jest.fn(),
          findUnique: jest.fn(),
          delete: jest.fn()
        }
      })
      .mock(JwtService)
      .using({ decode: jest.fn() })
      .mock(ConfigService)
      .using({})
      .mock(TokenBlacklistService)
      .using({ blacklistToken: jest.fn() })
      .mock(SessionService)
      .using({ createSession: jest.fn(), endSession: jest.fn() })
      .mock(AuthAuditLogService)
      .using({ logFailedLogin: jest.fn(), logSuccessfulLogin: jest.fn() })
      .mock(RefreshTokenService)
      .using({ generate: jest.fn(), revoke: jest.fn(), rotate: jest.fn(), validate: jest.fn() })
      .mock(AccessTokenService)
      .using({ generate: jest.fn() })
      .compile();

    authService = unit;
    prismaMock = unitRef.get(PrismaService) as unknown as MockPrismaService;
    jwtServiceMock = unitRef.get(JwtService);
    tokenBlacklistServiceMock = unitRef.get(TokenBlacklistService);
    sessionServiceMock = unitRef.get(SessionService);
    authAuditLogServiceMock = unitRef.get(AuthAuditLogService);
    refreshTokenServiceMock = unitRef.get(RefreshTokenService);
    accessTokenServiceMock = unitRef.get(AccessTokenService);
  });

  describe('login', () => {
    it('should successfully log in a user', async () => {
      const mockUser = userFactory.build();
      const mockSession = sessionFactory.build();
      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      accessTokenServiceMock.generate.mockReturnValue('accessToken');
      refreshTokenServiceMock.generate.mockResolvedValue({ token: 'refreshToken', familyId: 'familyId' });
      sessionServiceMock.createSession.mockResolvedValue(mockSession);

      const result = await authService.login({
        email: mockUser.email,
        password: 'password',
        ipAddress: '127.0.0.1',
        userAgent: 'test-agent'
      });

      expect(result).toEqual({
        userId: mockUser.id,
        roles: mockUser.roles,
        accessToken: 'accessToken',
        refreshToken: 'refreshToken'
      });
      expect(sessionServiceMock.createSession).toHaveBeenCalled();
      expect(authAuditLogServiceMock.logSuccessfulLogin).toHaveBeenCalled();
    });

    it('should throw UnauthorizedException for invalid credentials', async () => {
      prismaMock.user.findUnique.mockResolvedValue(null);

      await expect(
        authService.login({
          email: 'nonexistent@example.com',
          password: 'password',
          ipAddress: '127.0.0.1',
          userAgent: 'test-agent'
        })
      ).rejects.toThrow(UnauthorizedException);

      expect(authAuditLogServiceMock.logFailedLogin).toHaveBeenCalled();
    });
  });

  describe('register', () => {
    it('should successfully register a new user', async () => {
      const newUser = userFactory.build();
      const mockSession = sessionFactory.build();

      prismaMock.user.findUnique.mockResolvedValue(null);
      prismaMock.user.create.mockResolvedValue(newUser as User);
      prismaMock.user.create.mockResolvedValue(newUser as User);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
      accessTokenServiceMock.generate.mockReturnValue('accessToken');
      refreshTokenServiceMock.generate.mockResolvedValue({ token: 'refreshToken', familyId: 'familyId' });
      sessionServiceMock.createSession.mockResolvedValue(mockSession);

      const result = await authService.register({
        email: newUser.email,
        password: 'password',
        ipAddress: faker.internet.ip(),
        userAgent: faker.internet.userAgent()
      });

      expect(result).toEqual({
        userId: newUser.id,
        roles: newUser.roles,
        accessToken: 'accessToken',
        refreshToken: 'refreshToken'
      });
    });

    it('should throw BadRequestException if user already exists', async () => {
      const existingUser = userFactory.build();
      prismaMock.user.findUnique.mockResolvedValue(existingUser as User);

      await expect(
        authService.register({
          email: existingUser.email,
          password: 'password',
          ipAddress: faker.internet.ip(),
          userAgent: faker.internet.userAgent()
        })
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('logout', () => {
    it('should successfully log out a user', async () => {
      const mockSession = sessionFactory.build();
      jwtServiceMock.decode.mockReturnValue({
        exp: Date.now() / 1000 + 3600,
        sub: mockSession.userId,
        sessionId: faker.string.uuid()
      });

      await expect(authService.logout('accessToken', 'refreshToken')).resolves.toBeUndefined();

      expect(tokenBlacklistServiceMock.blacklistToken).toHaveBeenCalled();
      expect(refreshTokenServiceMock.revoke).toHaveBeenCalled();
      expect(sessionServiceMock.endSession).toHaveBeenCalled();
    });
  });

  describe('requestPasswordReset', () => {
    it('should create a password reset token for an existing user', async () => {
      const mockUser = userFactory.build();
      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);

      await authService.requestPasswordReset(mockUser.email);

      expect(prismaMock.passwordResetToken.create).toHaveBeenCalled();
    });

    it('should not reveal user existence for non-existent email', async () => {
      prismaMock.user.findUnique.mockResolvedValue(null);

      await authService.requestPasswordReset('nonexistent@example.com');

      expect(prismaMock.passwordResetToken.create).not.toHaveBeenCalled();
    });
  });

  describe('resetPassword', () => {
    it('should successfully reset password with valid token', async () => {
      const mockUser = userFactory.build();
      const mockResetToken = passwordResetTokenFactory.build({ userId: mockUser.id });
      prismaMock.passwordResetToken.findUnique.mockResolvedValue(mockResetToken);
      (bcrypt.hash as jest.Mock).mockResolvedValue('newHashedPassword');

      await authService.resetPassword(mockResetToken.token, 'newPassword');

      expect(prismaMock.user.update).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        data: { password: 'newHashedPassword' }
      });
      expect(prismaMock.passwordResetToken.delete).toHaveBeenCalledWith({
        where: { id: mockResetToken.id }
      });
    });

    it('should throw UnauthorizedException for invalid or expired token', async () => {
      prismaMock.passwordResetToken.findUnique.mockResolvedValue(null);

      await expect(
        authService.resetPassword('invalidToken', 'newPassword')
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('changePassword', () => {
    it('should successfully change password for valid user and old password', async () => {
      const mockUser = userFactory.build();
      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (bcrypt.hash as jest.Mock).mockResolvedValue('newHashedPassword');

      await authService.changePassword(mockUser.id, 'oldPassword', 'newPassword');

      expect(prismaMock.user.update).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        data: { password: 'newHashedPassword' }
      });
    });

    it('should throw UnauthorizedException for invalid old password', async () => {
      const mockUser = userFactory.build();
      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        authService.changePassword(mockUser.id, 'wrongOldPassword', 'newPassword')
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('refreshToken', () => {
    it('should successfully refresh tokens', async () => {
      const mockUser = userFactory.build();
      const mockRefreshToken = refreshTokenFactory.build({ userId: mockUser.id });
      refreshTokenServiceMock.rotate.mockResolvedValue('newRefreshToken');
      refreshTokenServiceMock.validate.mockResolvedValue({ userId: mockUser.id });
      prismaMock.user.findUnique.mockResolvedValue(mockUser as User);
      accessTokenServiceMock.generate.mockReturnValue('newAccessToken');
      jwtServiceMock.decode.mockReturnValue({
        exp: 10000,
        sub: faker.string.uuid(),
        sessionId: faker.string.uuid(),
      });
      const result = await authService.refreshToken(mockRefreshToken.token, 'oldAccessToken');

      expect(result).toEqual({
        accessToken: 'newAccessToken',
        refreshToken: 'newRefreshToken'
      });
    });

    it('should throw UnauthorizedException if user not found during refresh', async () => {
      const mockRefreshToken = refreshTokenFactory.build();
      refreshTokenServiceMock.rotate.mockResolvedValue('newRefreshToken');
      refreshTokenServiceMock.validate.mockResolvedValue({ userId: mockRefreshToken.userId });
      prismaMock.user.findUnique.mockResolvedValue(null);

      await expect(
        authService.refreshToken(mockRefreshToken.token, 'oldAccessToken')
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
