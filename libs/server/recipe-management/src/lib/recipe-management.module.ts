import { Module } from '@nestjs/common';
import { DataAccessRecipesModule } from '@nutri/server-data-access-recipes';
import { DbClientModule } from '@nutri/server-db-client';
import { RecipeDraftsController } from './controllers/recipe-drafts.controller';
import { RecipeEntitiesController } from './controllers/recipe-entities.controller';
import { RecipeIngredientsController } from './controllers/recipe-ingredients.controller';
import { RecipeInstructionsController } from './controllers/recipe-instructions.controller';
import { RecipeSchemasController } from './controllers/recipe-schemas.controller';
import { RecipesController } from './controllers/recipes.controller';
import { RecipeDraftsService } from './services/recipe-drafts.service';
import { RecipeEntitiesService } from './services/recipe-entities.service';
import { RecipeIngredientsService } from './services/recipe-ingredients.service';
import { RecipeInstructionsService } from './services/recipe-instructions.service';
import { RecipeSchemasService } from './services/recipe-schemas.service';
import { RecipesService } from './services/recipes.service';

@Module({
  imports: [DbClientModule, DataAccessRecipesModule],
  controllers: [
    RecipesController,
    RecipeSchemasController,
    RecipeIngredientsController,
    RecipeInstructionsController,
    RecipeEntitiesController,
    RecipeDraftsController,
  ],
  providers: [
    RecipesService,
    RecipeIngredientsService,
    RecipeInstructionsService,
    RecipeEntitiesService,
    RecipeDraftsService,
    RecipeSchemasService,
  ],
  exports: [
    RecipesService,
    RecipeIngredientsService,
    RecipeInstructionsService,
    RecipeEntitiesService,
    RecipeDraftsService,
    RecipeSchemasService,
  ],
})
export class RecipeManagementModule {}
