import { Global, Module } from '@nestjs/common';
// eslint-disable-next-line no-restricted-imports
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { ConfigService } from './config.service';
import { validate } from './env.validation';

/*
 * This module was created to simplify the configuration of the NestJS application
 * by providing a single place to define and validate the Env variables.
 */
@Global()
@Module({
  imports: [NestConfigModule.forRoot({ validate })],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
