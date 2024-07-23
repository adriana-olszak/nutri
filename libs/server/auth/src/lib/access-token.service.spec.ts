import { Test, TestingModule } from '@nestjs/testing';
import { AccessTokenService } from './access-token.service';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nutri/server-config';
import { userFactory } from '@nutri/server-testing';

// jest.mock('@nutri/server-db-client');
// jest.mock('@nestjs/jwt');
// jest.mock('@nutri/server-config');

describe('AccessTokenService', () => {
  let accessTokenService: AccessTokenService;
  let jwtServiceMock: jest.Mocked<JwtService>;
  // let configServiceMock: jest.Mocked<ConfigService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessTokenService, PrismaService, JwtService],
    }).compile();

    accessTokenService = module.get<AccessTokenService>(AccessTokenService);
    jwtServiceMock = module.get(JwtService) as jest.Mocked<JwtService>;
    // configServiceMock = module.get(ConfigService) as jest.Mocked<ConfigService>;

    // // Mock the ConfigService getter methods
    // jest
    //   .spyOn(configServiceMock, 'authJWTAccessExpiration', 'get')
    //   .mockReturnValue('1000');
    // jest
    //   .spyOn(configServiceMock, 'authJWTAccessSecret', 'get')
    //   .mockReturnValue('secret');
  });

  it('should generate an access token', () => {
    const user = userFactory.build();
    const token = 'generated-token';
    // jwtServiceMock.sign.mockReturnValue(token);

    const result = accessTokenService.generate({
      user: { id: user.id, email: user.email, roles: user.roles },
    });

    expect(result).toEqual(token);
    expect(jwtServiceMock.sign).toHaveBeenCalledWith(
      {
        sub: user.id,
        email: user.email,
        roles: user.roles,
      },
      {
        expiresIn: '1000',
        secret: 'secret',
      },
    );
  });
});
