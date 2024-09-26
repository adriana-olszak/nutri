import { ApolloServerPlugin } from '@apollo/server';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { IContext } from './interfaces';
import { ConfigService } from '@nutri/server-config';

// TODO https://dev.to/tugascript/nestjs-graphql-image-upload-to-a-s3-bucket-1njg
@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private readonly config: ConfigService) {
  }

  createGqlOptions(): ApolloDriverConfig {
    const plugins: ApolloServerPlugin[] = [];

    if (this.config.graphql.sandbox && !this.config.isProd)
      plugins.push(ApolloServerPluginLandingPageLocalDefault());

    if (this.config.graphql.sandbox && this.config.isProd)
      plugins.push(ApolloServerPluginLandingPageProductionDefault());

    return {
      playground: false,
      plugins,
      autoSchemaFile: true,
      introspection: !!this.config.graphql.introspection,
      allowBatchedHttpRequests: true,
      csrfPrevention: this.config.graphql.csrfPrevention,
      cache: 'bounded',
      installSubscriptionHandlers: !!this.config.graphql.subscriptions,
      subscriptions: this.config.graphql.subscriptions
        ? {
          'graphql-ws': {
            onConnect: (context: any) => {
              const { connectionParams, extra } = context;
              extra.token = connectionParams.token;
            },
          },
        }
        : undefined,
      context: (ctx: any): IContext => {
        // Subscriptions pass through JWT token for authentication
        if (ctx.extra) return { req: ctx.extra };
        // Queries, Mutations
        else return ctx;
      },
    };
  }
}
