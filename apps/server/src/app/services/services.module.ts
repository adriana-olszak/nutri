import { Module } from '@nestjs/common';
import { DbClientModule } from '@nutri/server-db-client';
import { RecipeService } from './recipe.service';


@Module({
  imports: [
    DbClientModule
  ],
  providers: [RecipeService],
  exports: [RecipeService]
})
export class ServicesModule {
}
