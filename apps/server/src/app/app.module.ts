import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { GraphqlModule } from './graphql/graphql.module';
import { ConfigModule } from '@nutri/server-config/config.module';
import { ConfigService } from '@nutri/server-config';
import { RecipeModule } from './modules/recipe/recipe.module';
import { FoodModule } from './modules/food/food.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle
    }),
    GraphqlModule,
    RecipeModule,
    FoodModule,
    QuestionnaireModule
  ]
})
export class AppModule {
}
