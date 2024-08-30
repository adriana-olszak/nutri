import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { GraphqlModule } from './graphql/graphql.module';
import { ConfigModule } from '@nutri/server-config/config.module';
import { ConfigService } from '@nutri/server-config';
import { RecipeModule } from './modules/recipe/recipe.module';
import { FoodModule } from './modules/food/food.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { MailerModule } from '@nutri/server-mailer';
import { MailerRendererModule } from '@nutri/server-mailer-renderer';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle
    }),
    MailerRendererModule,
    MailerModule.forRoot({
      rendererProvider: {
        provide: 'IRenderer',
        useExisting: 'IRenderer',
      },
      templates: [
        { name: 'welcome', component: WelcomeEmail },
        { name: 'password-reset', component: PasswordResetEmail },
      ],
    }),
    GraphqlModule,
    RecipeModule,
    FoodModule,
    QuestionnaireModule,
    NutritionModule
  ]
})
export class AppModule {
}
