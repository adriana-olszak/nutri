import { TokenBlacklistService } from './token-blacklist.service';
import { PrismaService } from '@nutri/server-db-client';
import { TestBed } from '@automock/jest';
import {
  tokenBlacklistFactory,
  MockPrismaService,
} from '@nutri/server-testing';

describe('TokenBlacklistService', () => {
  let tokenBlacklistService: TokenBlacklistService;
  let prismaMock: MockPrismaService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(TokenBlacklistService)
      .mock(PrismaService)
      .using({
        tokenBlacklist: {
          create: jest.fn(),
          findUnique: jest.fn(),
          deleteMany: jest.fn(),
        },
      })
      .compile();

    tokenBlacklistService = unit;
    prismaMock = unitRef.get(PrismaService) as MockPrismaService;
  });

  it('should blacklist a token', async () => {
    const tokenData = tokenBlacklistFactory.build();
    await tokenBlacklistService.blacklistToken(tokenData);
    expect(prismaMock.tokenBlacklist.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        token: tokenData.token,
        expiresAt: tokenData.expiresAt,
      }),
    });
  });

  it('should check if a token is blacklisted', async () => {
    const tokenData = tokenBlacklistFactory.build();
    prismaMock.tokenBlacklist.findUnique.mockResolvedValue(tokenData);
    const result = await tokenBlacklistService.isTokenBlacklisted({
      token: tokenData.token,
    });
    expect(result).toBe(true);
  });

  it('should cleanup expired tokens', async () => {
    await tokenBlacklistService.cleanupExpiredTokens();
    expect(prismaMock.tokenBlacklist.deleteMany).toHaveBeenCalledWith({
      where: {
        expiresAt: {
          lt: expect.any(Date),
        },
      },
    });
  });
});
