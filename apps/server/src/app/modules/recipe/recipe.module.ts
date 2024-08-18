import { Module } from '@nestjs/common';
import { NestAuthModule } from '@nutri/server-auth';
import { DbClientModule } from '@nutri/server-db-client';
import { RECIPE_RESOLVERS } from './resolvers';
import { RecipeDataLoader } from './recipe.data-loader';
import { RecipeService } from './recipe.service';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule
  ],
  providers: [RecipeDataLoader, RecipeService, ...RECIPE_RESOLVERS]
})
export class RecipeModule {
}
