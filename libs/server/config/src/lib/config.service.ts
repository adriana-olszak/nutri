import { Injectable } from '@nestjs/common';
// eslint-disable-next-line no-restricted-imports
import { ConfigService as NestConfigService } from '@nestjs/config';

import { Environment, EnvironmentVariablesType } from './env.validation';

// Just an example for now.
@Injectable()
export class ConfigService {
  constructor(
    private readonly configService: NestConfigService<
      EnvironmentVariablesType,
      true
    >,
  ) {}

  get application() {
    return this.configService.get('APP_NAME', { infer: true });
  }

  get environment() {
    return this.configService.get('NODE_ENV', { infer: true });
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

  port(): number {
    return this.configService.get('APP_PORT', { infer: true });
  }

  /**
   * DO NOT REMOVE
   *
   * It is used to bootstrap isolation in integration tests.
   * @see feature/utils/helpers/
   */
  get databaseSchema() {
    return 'public';
  }
}
