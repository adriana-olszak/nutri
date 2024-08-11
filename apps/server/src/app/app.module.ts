import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { GraphqlModule } from './graphql/graphql.module';
import { ConfigModule } from '@nutri/server-config/config.module';
import { ConfigService } from '@nutri/server-config';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    GraphqlModule,
  ]
})
export class AppModule {
}
