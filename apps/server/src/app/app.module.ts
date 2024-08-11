import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { ConfigModule } from '@nutri/server-config/config.module';
import { ConfigService } from '@nutri/server-config';
import { AuthResolver } from './graphql/resolvers/Auth';
import { NestAuthModule } from '@nutri/server-auth';
import { GqlConfigService } from './graphql/gql-config.service';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { DbClientModule } from '@nutri/server-db-client';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    DbClientModule,
    ConfigModule,
    NestAuthModule,
    NestGraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [ConfigModule],
    }),
  ],
  providers: [AuthResolver],
})
export class AppModule {}
