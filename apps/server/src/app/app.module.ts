import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';
import { DataAccessUsersModule } from '@nutri/server-data-access-user';
import { ConfigModule, ConfigService } from '@nutri/server-config';
import { JwtModule } from './jwt';
import { AuthModule } from './auth/auth.module';
import { GraphqlModule } from './graphql';

@Module({
  imports: [ThrottlerModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => config.throttle
  }), DataAccessUsersModule, ConfigModule, JwtModule, AuthModule, GraphqlModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
