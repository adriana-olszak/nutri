import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { GraphqlModule } from './graphql/graphql.module';
import { ConfigModule } from '@nutri/server-config/config.module';
import { ConfigService } from '@nutri/server-config';
import { RecipeModule } from './modules/recipe/recipe.module';
import { FoodModule } from './modules/food/food.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { NotificationModule } from './modules/notification/notification.module';
import { ManualReviewModule } from './modules/manual-review/manual-review.module';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle
    }),
    NotificationModule,
    GraphqlModule,
    RecipeModule,
    FoodModule,
    QuestionnaireModule,
    NutritionModule,
    ManualReviewModule
  ]
})
export class AppModule {
}
