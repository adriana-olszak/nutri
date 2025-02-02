import { ExpressAdapter } from '@bull-board/express';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { ConfigService } from '@nutri/server-config';
import { ConfigModule } from '@nutri/server-config/config.module';
import { ContextModule } from '@nutri/server-context';
import { IngredientMatchingModule } from '@nutri/server-ingredient-matching';
import { MetricsModule } from '@nutri/server-metrics';
import { BullDashboardService, QUEUE_NAMES, QueueModule } from '@nutri/server-queue';
import { LoggerModule } from 'nestjs-pino';
import { GraphqlModule } from './graphql/graphql.module';
import { FoodModule } from './modules/food/food.module';
import { ManualReviewModule } from './modules/manual-review/manual-review.module';
import { NotificationModule } from './modules/notification/notification.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { TableViewDefinitionModule } from './modules/table-view-definition/table-view-definition.module';


@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
          transport: {
            targets: [
              // send logs to stdout
              {
                target: 'pino/file',
                options: { destination: 1 }
              },
              // send logs to loki
              {
                target: "pino-loki",
                options: {
                  batching: true,
                  interval: 5,
                  host: 'http://localhost:3100',
                }
              }
            ]
          },
          redact: ['req.headers.cookie', 'req.headers.authorization'],
        },
    }),
    ContextModule.register(),
    MetricsModule.forRoot(),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    QueueModule.register(Object.values(QUEUE_NAMES)),
    IngredientMatchingModule,
    NotificationModule,
    GraphqlModule,
    RecipeModule,
    FoodModule,
    QuestionnaireModule,
    NutritionModule,
    ManualReviewModule,
    TableViewDefinitionModule,
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly bullDashboardService: BullDashboardService) {}

  configure(consumer: MiddlewareConsumer): void {
    const serverAdapter = new ExpressAdapter();
    const router = serverAdapter.getRouter();

    this.bullDashboardService.createDashboard(serverAdapter);

    serverAdapter.setBasePath('/management');
    consumer.apply(router).forRoutes('/management');
  }
}
