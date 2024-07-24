import { AccessTokenService } from './access-token.service';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { userFactory } from '@nutri/server-testing';
import { ConfigService } from '@nutri/server-config';
import { TestBed } from '@automock/jest';
import { faker } from '@faker-js/faker';


describe('AccessTokenService', () => {
  let accessTokenService: AccessTokenService;
  let jwtServiceMock: JwtService;

  beforeEach(async () => {
    const { unit, unitRef } = TestBed.create(AccessTokenService)
      .mock(PrismaService)
      .using({
        loginLog: {
          create: jest.fn()
        },
        user: {
          findUnique: jest.fn()
        }
      })
      .mock(ConfigService)
      .using({
        authJWTAccessExpiration: '1000',
        authJWTAccessSecret: 'secret'
      })
      .compile();
    accessTokenService = unit;
    jwtServiceMock = unitRef.get(JwtService);
  });

  it('should generate an access token', () => {
    const user = userFactory.build();
    const sessionId = faker.string.uuid()
    const token = 'generated-token';
    // Mock the ConfigService getter methods
    jest
      .spyOn(jwtServiceMock, 'sign')
      .mockReturnValue(token);
    const result = accessTokenService.generate({
      user: { id: user.id, email: user.email, roles: user.roles },
      sessionId
    });

    expect(result).toEqual(token);
    expect(jwtServiceMock.sign).toHaveBeenCalledWith(
      {
        sub: user.id,
        email: user.email,
        roles: user.roles,
        sessionId
      },
      {
        expiresIn: '1000',
        secret: 'secret'
      }
    );
  });
});
