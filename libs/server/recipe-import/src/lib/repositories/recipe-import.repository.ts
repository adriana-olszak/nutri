import { Injectable, Logger } from '@nestjs/common';
import { MatchRepository } from '@nutri/server-data-access-matching';
import {
    EntityType,
    RecipeEntitiesRepository,
    RecipeIngredientsRepository,
    RecipeInstructionsRepository,
    RecipeWithRelations,
    RecipesRepository,
} from '@nutri/server-data-access-recipes';
import { TransactionService } from '@nutri/server-db-client';
import { ParsedRecipe } from '../types/recipe-parsing.types';

@Injectable()
export class RecipeImportRepository {
  private readonly logger = new Logger(RecipeImportRepository.name);

  constructor(
    private readonly txService: TransactionService,
    private readonly recipesRepository: RecipesRepository,
    private readonly recipeIngredientsRepository: RecipeIngredientsRepository,
    private readonly recipeInstructionsRepository: RecipeInstructionsRepository,
    private readonly recipeEntitiesRepository: RecipeEntitiesRepository,
    private readonly matchRepostiory: MatchRepository,
  ) {}

  async saveRecipe(
    recipe: ParsedRecipe,
    options: { autoMatchIngredients: boolean },
  ): Promise<RecipeWithRelations> {
    return await this.txService.transaction(async () => {
      // Create base recipe
      const savedRecipe = await this.recipesRepository.create({
        title: recipe.title,
        sourceId: undefined,
        sourceUrl: recipe.sourceUrl,
        description: recipe.description,
        cookingTime: recipe.cookingTime,
        prepTime: recipe.prepTime,
        servingsText: recipe.servingsText,
        servingsMin: recipe.servingsMin,
        servingsMax: recipe.servingsMax,
      });

      // Create ingredients with their parts
      const partsByName = new Map<string, string>();

      for (const ingredient of recipe.ingredients) {
        if (ingredient.partName) {
          if (!partsByName.has(ingredient.partName)) {
            const part = await this.recipesRepository.createPart(
              savedRecipe.id,
              ingredient.partName,
            );
            partsByName.set(ingredient.partName, part.id);
          }
        }

        await this.recipeIngredientsRepository.create({
          recipeId: savedRecipe.id,
          partId: ingredient.partName
            ? partsByName.get(ingredient.partName)
            : undefined,
          quantity: ingredient.quantity,
          quantityText: ingredient.quantityText,
          unit: ingredient.unit,
          unitText: ingredient.unitText,
          ingredientText: ingredient.ingredientText,
          extraInfo: ingredient.extraInfo,
        });
      }

      // Create instructions
      await this.recipeInstructionsRepository.createMany(
        recipe.instructions.map((instruction) => ({
          recipeId: savedRecipe.id,
          content: instruction.content,
          type: instruction.type,
          order: instruction.order,
          listIndex: instruction.listIndex,
        })),
      );

      // Create and connect entities (categories, seasons, tags)
      await this.createAndConnectEntities(savedRecipe.id, recipe);

      const storedRecipe = await this.recipesRepository.findById(
        savedRecipe.id,
      );
      if (!storedRecipe) {
        throw new Error('Recipe not found');
      }

      if (options.autoMatchIngredients) {
        await Promise.all(
          storedRecipe.ingredients.map((ingredient) =>
            this.matchRepostiory.create({
              ingredientText: ingredient.ingredientText,
              status: 'PENDING_MATCH',
              recipeIngredientId: ingredient.id,
            }),
          ),
        );
      }

      return storedRecipe;
    });
  }

  private async createAndConnectEntities(
    recipeId: string,
    recipe: ParsedRecipe,
  ) {
    const createEntities = async (
      items: string[] | undefined,
      type: EntityType,
    ) => {
      if (!items?.length) return;

      for (const item of items) {
        await this.recipeEntitiesRepository.findOrCreateAndConnect(
          recipeId,
          item,
          type,
        );
      }
    };

    await Promise.all([
      createEntities(recipe.categories, 'recipeCategory'),
      createEntities(recipe.seasons, 'season'),
      createEntities(recipe.tags, 'tag'),
    ]);
  }
}
