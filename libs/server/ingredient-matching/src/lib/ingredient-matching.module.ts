
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { MLModule } from '@nutri/server-ml';
import { QUEUE_NAMES } from '@nutri/server-queue';

import { MatchProcessor } from './queue/match.processor';
import { MatchScheduler } from './queue/match.scheduler';

import { DataAccessFoodsModule, FoodEmbeddingRepository } from '@nutri/server-data-access-foods';
import { DataAccessMatchingModule } from '@nutri/server-data-access-matching';
import { DataAccessRecipesModule } from '@nutri/server-data-access-recipes';
import { DbClientModule } from '@nutri/server-db-client';
import { IngredientMatchingController } from './controllers/ingredient-matching.controller';
import { MatchResolver } from './resolvers/match.resolver';
import { IngredientMatchingService } from './services/ingredient-matching.service';

@Module({
  imports: [
    MLModule,
    BullModule.registerQueue({
      name: QUEUE_NAMES.INGREDIENT_MATCH,
    }),
    DbClientModule,
    DataAccessFoodsModule,
    DataAccessRecipesModule,
    DataAccessMatchingModule
  ],
  providers: [
    IngredientMatchingService,
    FoodEmbeddingRepository,
    MatchProcessor,
    MatchScheduler,
    MatchResolver,
  ],
  controllers: [IngredientMatchingController],
  exports: [
    IngredientMatchingService,
    MatchScheduler,
  ],
})
export class IngredientMatchingModule {}
