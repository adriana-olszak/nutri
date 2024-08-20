import { DbClientModule } from '@nutri/server-db-client';
import { Module } from '@nestjs/common';
import { NutritionService } from './nutrition.service';
import { ALL_NUTRITION_RESOLVERS } from './resolvers';

@Module({
  imports:[DbClientModule],
  providers: [NutritionService, ...ALL_NUTRITION_RESOLVERS],
  exports: [NutritionService],
})
export class NutritionModule {}
