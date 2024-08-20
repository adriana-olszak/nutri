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

  get isProd(): boolean {
    return this.environment === Environment.PRODUCTION;
  }

  get isTest(): boolean {
    return this.environment === Environment.TEST;
  }

  get isStaging(): boolean {
    return this.environment === Environment.STAGING;
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
      secret: this.authJWTAccessSecret,
      publicKey: this.authJWTAccessPublicKey,
      signOptions: {
        algorithm: 'ES256',
        expiresIn: this.authJWTAccessExpiration
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

  get graphql() {
    return {
      subscriptions: true,
      sandbox: true,
      introspection: true,
      csrfPrevention: true,
      uploads: {
        maxFileSize: 20_000_000, // 20 MB
        maxFiles: 5
      }
    };
  }

  get publicRegistration(): boolean {
    return this.configService.get('PUBLIC_REGISTRATION', { infer: true });
  }

  get helmet() {
    return true;
  }

  get bcrypt() {
    return {
      costFactor: 12,
      saltSize: 16
    };
  }

  get authJWTRefreshExpiration() {
    return this.configService.get('AUTH_JWT_REFRESH_EXPIRATION', { infer: true });
  }

  get authJWTRefreshSecret() {
    return this.configService.get('AUTH_JWT_REFRESH_SECRET', { infer: true }).replace(/\\n/g, '\n');
  }

  get authJWTAccessExpiration() {
    return this.configService.get('AUTH_JWT_ACCESS_EXPIRATION', { infer: true });
  }

  get authJWTAccessSecret() {
    return this.configService.get('AUTH_JWT_ACCESS_SECRET', { infer: true }).replace(/\\n/g, '\n');
  }

  get authJWTAccessPublicKey() {
    return this.configService.get('AUTH_JWT_ACCESS_PUBLIC_KEY', { infer: true }).replace(/\\n/g, '\n');
  }

  get throttle() {
    return {
      ignoreUserAgents: [/googlebot/gi, /bingbot/gi],
      throttlers: [
        {
          limit: 10,
          ttl: 30_000
        }
      ]
    };
  }

  port(): number {
    return this.configService.get('SERVER_APP_PORT', { infer: true });
  }
}
