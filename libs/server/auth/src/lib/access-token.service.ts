import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nutri/server-config';
import { ErrorHandler } from '@nutri/server-utils';

type GenerateTokenParams = {
  user: {
    id: string;
    email: string;
    roles: string[];
  };
  sessionId: string;
};

@Injectable()
export class AccessTokenService {
  private readonly logger = new Logger(AccessTokenService.name);
  private readonly errorHandler = new ErrorHandler(this.logger);

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) {
  }

  generate({ user, sessionId }: GenerateTokenParams) {
    const expiresIn = this.configService.authJWTAccessExpiration;
    const expiresAt = new Date(Date.now() + expiresIn * 1000);

    const payload = {
      sub: user.id,
      email: user.email,
      roles: user.roles,
      sessionId
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn,
      secret: this.configService.authJWTAccessSecret
    });

    return { accessToken, expiresAt };
  }
}
