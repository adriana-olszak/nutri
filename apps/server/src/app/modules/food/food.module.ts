import { Module } from '@nestjs/common';
import { NestAuthModule } from '@nutri/server-auth';
import { DbClientModule } from '@nutri/server-db-client';
import { FoodDataLoader } from './food.data-loader';
import { FOOD_RESOLVERS } from './resolvers';
import { FoodService } from './food.service';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule
  ],
  providers: [FoodDataLoader, FoodService, ...FOOD_RESOLVERS]
})
export class FoodModule {
}
