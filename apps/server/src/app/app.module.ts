import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { DataAccessUsersModule } from '@nutri/server-data-access-user';
import { ConfigModule, ConfigService } from '@nutri/server-config';
import { GraphqlModule } from './graphql';

@Module({
  imports: [ThrottlerModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => config.throttle
  }), DataAccessUsersModule, ConfigModule, GraphqlModule]
})
export class AppModule {
}
