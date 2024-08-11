import { Module } from '@nestjs/common';

import { ConfigModule } from '@nutri/server-config/config.module';
import { NestAuthModule } from '@nutri/server-auth';
import { GqlConfigService } from './gql-config.service';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ALL_RESOLVERS } from './resolvers';
import { DbClientModule } from '@nutri/server-db-client';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule,
    ServicesModule,
    NestGraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [ConfigModule],
    }),
  ],
  providers: [...ALL_RESOLVERS],
})
export class GraphqlModule {}
