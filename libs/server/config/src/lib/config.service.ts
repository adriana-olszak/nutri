import { Injectable } from '@nestjs/common';
// eslint-disable-next-line no-restricted-imports
import { ConfigService as NestConfigService } from '@nestjs/config';
import { StrategyOptions as GoogleStrategyOptions } from 'passport-google-oauth20';
import type { JwtModuleOptions } from '@nestjs/jwt';

import { Environment, EnvironmentVariablesType } from './env.validation';

// Just an example for now.
@Injectable()
export class ConfigService {
  constructor(
    private readonly configService: NestConfigService<
      EnvironmentVariablesType,
      true
    >
  ) {
  }

  get environment() {
    return this.configService.get('NODE_ENV', { infer: true });
  }

  get globalPrefix() {
    return 'api';
  }

  get isDev(): boolean {
    return this.environment === Environment.DEVELOPMENT;
  }

  get isTest(): boolean {
    return this.environment === Environment.TEST;
  }

  get isStaging(): boolean {
    return this.environment === Environment.STAGING;
  }

  get authRememberMeExpiresIn(): number {
    return this.configService.get('AUTH_REMEMBER_ME_EXPIRES_IN', { infer: true });
  }
  get clientUrl(): string {
    return this.configService.get('CLIENT_BASE_URL', { infer: true });
  }

  get serverUrl(): string {
    return this.configService.get('SERVER_BASE_URL', { infer: true });
  }

  get bcryptCost(): number {
    return this.configService.get('BCRYPT_COST', { infer: true });
  }

  get jwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get('JWT_PRIVATE_KEY', { infer: true }).replace(/\\n/g, '\n'),
      publicKey: this.configService.get('JWT_PUBLIC_KEY', { infer: true }).replace(/\\n/g, '\n'),
      signOptions: {
        algorithm: 'ES256',
        expiresIn: this.configService.get('JWT_EXPIRES_IN', { infer: true })
      }
    };
  }

  get oauth(): {
    loginConfirmedURL: string;
    google?: GoogleStrategyOptions;
  } {
    return {
      loginConfirmedURL: `${this.clientUrl}/login-confirmed`,
      google: {
        clientID: this.configService.get('OAUTH_GOOGLE_CLIENT_ID', {
          infer: true
        }),
        clientSecret: this.configService.get('OAUTH_GOOGLE_CLIENT_SECRET', {
          infer: true
        }),
        callbackURL: `${this.serverUrl}/auth/google/redirect`,
        scope: ['email']
      }
    };
  }

  port(): number {
    return this.configService.get('SERVER_APP_PORT', { infer: true });
  }
}
