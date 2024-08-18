import { Module } from '@nestjs/common';

import { ConfigModule } from '@nutri/server-config/config.module';
import { NestAuthModule } from '@nutri/server-auth';
import { GqlConfigService } from './gql-config.service';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { DbClientModule } from '@nutri/server-db-client';
import { AuthResolver } from './resolvers/auth.resolver';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule,
    NestGraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [ConfigModule]
    })
  ],
  providers: [AuthResolver]
})
export class GraphqlModule {
}
