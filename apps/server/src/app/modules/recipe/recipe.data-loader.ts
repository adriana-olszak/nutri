import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { Food } from '../../graphql/models/food.model';
import { RecipeImage } from '../../graphql/models/recipe-image.model';
import { RecipeIngredient } from '../../graphql/models/recipe-ingredient.model';
import { RecipePart } from '../../graphql/models/recipe-part.model';
import { Tag } from '../../graphql/models/tag.model';

@Injectable({ scope: Scope.REQUEST })
export class RecipeDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchParts = new DataLoader<string, RecipePart[]>(
    async (recipeIds: readonly string[]): Promise<(RecipePart[] | Error)[]> => {
      try {
        const parts = await this.prisma.recipePart.findMany({
          where: { recipeId: { in: recipeIds as string[] } }
        });

        const partMap = new Map<string, RecipePart[]>();
        parts.forEach(part => {
          if (!partMap.has(part.recipeId)) {
            partMap.set(part.recipeId, []);
          }
          partMap.get(part.recipeId)?.push(part);
        });

        return recipeIds.map(id => partMap.get(id) || []);
      } catch (error) {
        return recipeIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );
  public readonly batchIngredients = new DataLoader<string, RecipeIngredient[]>(async (recipeIds: string[]): Promise<(RecipeIngredient[] | Error)[]> => {
    try {
      const ingredients: RecipeIngredient[] = await this.prisma.recipeIngredient.findMany({
        where: { recipeId: { in: recipeIds } }
      });

      const map = new Map<string, RecipeIngredient[]>();
      ingredients.forEach(part => {
        if (!map.has(part.recipeId)) {
          map.set(part.recipeId, []);
        }
        map.get(part.recipeId)?.push(part);
      });

      return recipeIds.map(id => map.get(id) || []);
    } catch (error) {
      return recipeIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
    }
  });

  public readonly batchImages = new DataLoader<string, RecipeImage[]>(
    async (recipeIds: readonly string[]): Promise<(RecipeImage[] | Error)[]> => {
      try {
        const images = await this.prisma.recipeImage.findMany({
          where: { recipeId: { in: recipeIds as string[] } }
        });

        const imageMap = new Map<string, RecipeImage[]>();
        images.forEach(image => {
          if (!imageMap.has(image.recipeId)) {
            imageMap.set(image.recipeId, []);
          }
          imageMap.get(image.recipeId)?.push(image);
        });

        return recipeIds.map(id => imageMap.get(id) || []);
      } catch (error) {
        return recipeIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );


  public readonly batchTags = new DataLoader<string, Tag[]>(
    async (recipeIds: readonly string[]): Promise<(Tag[] | Error)[]> => {
      try {
        const tagsWithRecipes = await this.prisma.tag.findMany({
          where: { recipes: { some: { id: { in: recipeIds as string[] } } } },
          include: { recipes: { select: { id: true } } }
        });

        const tagMap = new Map<string, Tag[]>();
        tagsWithRecipes.forEach(tag => {
          tag.recipes.forEach(recipe => {
            if (!tagMap.has(recipe.id)) {
              tagMap.set(recipe.id, []);
            }
            const { recipes, ...tagWithoutRecipes } = tag;
            tagMap.get(recipe.id)?.push(tagWithoutRecipes);
          });
        });

        return recipeIds.map(id => tagMap.get(id) || []);
      } catch (error) {
        return recipeIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchIngredientsByPart = new DataLoader<string, RecipeIngredient[]>(
    async (partIds: readonly string[]): Promise<(RecipeIngredient[] | Error)[]> => {
      try {
        const ingredients = await this.prisma.recipeIngredient.findMany({
          where: { partId: { in: partIds as string[] } }
        });
        const ingredientMap = new Map<string, RecipeIngredient[]>();
        ingredients.forEach(ingredient => {
          if (!ingredientMap.has(ingredient.partId!)) {
            ingredientMap.set(ingredient.partId!, []);
          }
          ingredientMap.get(ingredient.partId!)?.push(ingredient);
        });
        return partIds.map(id => ingredientMap.get(id) || []);
      } catch (error) {
        return partIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoods = new DataLoader<string, Food>(
    async (foodIds: readonly string[]): Promise<(Food | Error)[]> => {
      try {
        const foods = await this.prisma.food.findMany({
          where: { id: { in: foodIds as string[] } }
        });
        const foodMap = new Map(foods.map(food => [food.id, food]));
        return foodIds.map(id => {
          const food = foodMap.get(id);
          return food ? food : new Error(`Food not found for id: ${id}`);
        });
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );
}
