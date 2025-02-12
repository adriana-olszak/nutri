import { Module } from '@nestjs/common';

import { DbClientModule } from '@nutri/server-db-client';
import { RecipeEntitiesRepository } from './repositories/recipe-entities.repository';
import { RecipeImagesRepository } from './repositories/recipe-images.repository';
import { RecipeIngredientsRepository } from './repositories/recipe-ingredients.repository';
import { RecipeInstructionsRepository } from './repositories/recipe-instructions.repository';
import { RecipesRepository } from './repositories/recipes.repository';

@Module({
  imports: [DbClientModule],

  providers: [
    RecipesRepository,
    RecipeIngredientsRepository,
    RecipeInstructionsRepository,
    RecipeImagesRepository,
    RecipeEntitiesRepository,
    RecipeIngredientsRepository,
    RecipeInstructionsRepository
  ],
  exports: [
    RecipesRepository,
    RecipeIngredientsRepository,
    RecipeInstructionsRepository,
    RecipeImagesRepository,
    RecipeEntitiesRepository,
    RecipeIngredientsRepository,
    RecipeInstructionsRepository
  ],
})
export class DataAccessRecipesModule {}
