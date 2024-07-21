import { ApolloDriver } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

// import { MailModule } from '../mail';
import { GqlConfigService } from './gql-config.service';
import { ALL_RESOLVERS } from './resolvers';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nutri/server-config';
import { DbClientModule } from '@nutri/server-db-client';

@Global()
@Module({
  imports: [
    AuthModule,
    // MailModule,
    DbClientModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [DbClientModule, ConfigModule],
    }),
  ],
  providers: [...ALL_RESOLVERS],
})
export class GraphqlModule {}
