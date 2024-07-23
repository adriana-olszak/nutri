import { RefreshTokenService } from './refresh-token.service';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { TestBed } from '@automock/jest';
import {
  refreshTokenFactory,
  userFactory,
  MockPrismaService,
} from '@nutri/server-testing';

describe('RefreshTokenService', () => {
  let refreshTokenService: RefreshTokenService;
  let prismaMock: MockPrismaService;
  let jwtServiceMock: jest.Mocked<JwtService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(RefreshTokenService)
      .mock(PrismaService)
      .using({
        refreshToken: {
          create: jest.fn(),
          findUnique: jest.fn(),
          update: jest.fn(),
          updateMany: jest.fn(),
        },
      })
      .mock(JwtService)
      .using({
        sign: jest.fn(),
      })
      .compile();

    refreshTokenService = unit;
    prismaMock = unitRef.get(PrismaService) as MockPrismaService;
    jwtServiceMock = unitRef.get(JwtService) as jest.Mocked<JwtService>;
  });

  it('should generate a refresh token', async () => {
    const user = userFactory.build();
    const refreshToken = refreshTokenFactory.build({ userId: user.id });
    jwtServiceMock.sign.mockReturnValue(refreshToken.token);
    prismaMock.refreshToken.create.mockResolvedValue(refreshToken);

    const result = await refreshTokenService.generate({ userId: user.id });
    expect(result).toEqual({
      token: refreshToken.token,
      familyId: refreshToken.familyId,
    });
  });

  it('should rotate a refresh token', async () => {
    const oldToken = refreshTokenFactory.build();
    const newToken = refreshTokenFactory.build({
      userId: oldToken.userId,
      familyId: oldToken.familyId,
    });

    prismaMock.refreshToken.findUnique.mockResolvedValue(oldToken);
    prismaMock.refreshToken.update.mockResolvedValue(oldToken);
    jwtServiceMock.sign.mockReturnValue(newToken.token);
    prismaMock.refreshToken.create.mockResolvedValue(newToken);

    const result = await refreshTokenService.rotate({
      oldToken: oldToken.token,
    });
    expect(result).toEqual(newToken.token);
  });

  // Add more tests for other methods...
});
