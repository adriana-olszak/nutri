import { Module } from '@nestjs/common';
import { DbClientModule } from '@nutri/server-db-client';
import { FoodCategoriesRepository } from './repositories/food-categories.repository';
import { FoodEmbeddingRepository } from './repositories/food-embedding.repository';
import { FoodNutrientsRepository } from './repositories/food-nutrients.repository';
import { FoodsRepository } from './repositories/foods.repository';

@Module({
  imports: [DbClientModule],
  providers: [
    FoodsRepository,
    FoodCategoriesRepository,
    FoodNutrientsRepository,
    FoodEmbeddingRepository
  ],
  exports: [
    FoodsRepository,
    FoodCategoriesRepository,
    FoodNutrientsRepository,
  ],
})
export class DataAccessFoodsModule {}
