import { ApolloDriver } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GqlConfigService } from './gql-config.service';
import { ALL_RESOLVERS } from './resolvers';
import { ConfigModule } from '@nutri/server-config/config.module';
import { DbClientModule } from '@nutri/server-db-client';
import { NestAuthModule } from '@nutri/server-auth';

@Global()
@Module({
  imports: [
    DbClientModule,
    NestAuthModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [DbClientModule, ConfigModule],
    }),
  ],
  providers: [...ALL_RESOLVERS],
})
export class GraphqlModule {}
