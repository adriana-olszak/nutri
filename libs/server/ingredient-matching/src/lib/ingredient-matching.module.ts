
import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { MLModule } from '@nutri/server-ml';
import { QUEUE_NAMES } from '@nutri/server-queue';

import { MatchProcessor } from './queue/match.processor';
import { MatchScheduler } from './queue/match.scheduler';

import { DbClientModule } from '@nutri/server-db-client';
import { MatchController } from './controllers/match.controller';
import { FoodEmbeddingRepository } from './repositories/food-embedding.repository';
import { FoodRepository } from './repositories/food.repository';
import { MatchRepository } from './repositories/match.repository';
import { MatchResolver } from './resolvers/match.resolver';
import { IngredientMatchingService } from './services/ingredient-matching.service';

@Module({
  imports: [
    MLModule,
    BullModule.registerQueue({
      name: QUEUE_NAMES.INGREDIENT_MATCH,
    }),
    DbClientModule
  ],
  providers: [
    IngredientMatchingService,
    FoodEmbeddingRepository,
    MatchRepository,
    FoodRepository,
    MatchProcessor,
    MatchScheduler,
    MatchResolver,
  ],
  controllers: [MatchController],
  exports: [
    IngredientMatchingService,
    MatchScheduler,
  ],
})
export class IngredientMatchingModule {}
