import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { RecipeCategory } from '../../@generated/recipe-category/recipe-category.model';
import { RecipePart } from '../../@generated/recipe-part/recipe-part.model';
import { RecipeImage } from '../../@generated/recipe-image/recipe-image.model';
import { Season } from '../../@generated/season/season.model';
import { Tag } from '../../@generated/tag/tag.model';
import { RecipeIngredient } from '../../@generated/recipe-ingredient/recipe-ingredient.model';
import { Food } from '../../@generated/food/food.model';

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
          partMap.get(part.recipeId)!.push(part);
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

  public readonly batchCategories = new DataLoader<string, Pick<RecipeCategory, 'id' | 'name'>[]>(
    async (recipeIds: readonly string[]) => {
      const categoriesWithRecipes = await this.prisma.recipeCategory.findMany({
        where: { recipes: { some: { id: { in: recipeIds as string[] } } } },
        include: { recipes: { select: { id: true } } }
      });

      const categoryMap = new Map<string, Pick<RecipeCategory, 'id' | 'name'>[]>();

      recipeIds.forEach(id => {
        const categories = categoriesWithRecipes
          .filter(category => category.recipes.some(recipe => recipe.id === id))
          .map(({ recipes, ...rest }) => rest);
        categoryMap.set(id, categories);
      });

      return recipeIds.map(id => categoryMap.get(id) || []);
    }
  );

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
          imageMap.get(image.recipeId)!.push(image);
        });

        return recipeIds.map(id => imageMap.get(id) || []);
      } catch (error) {
        return recipeIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchSeasons = new DataLoader<string, Season[]>(
    async (recipeIds: readonly string[]): Promise<(Season[] | Error)[]> => {
      try {
        const seasonsWithRecipes = await this.prisma.season.findMany({
          where: { recipes: { some: { id: { in: recipeIds as string[] } } } },
          include: { recipes: { select: { id: true } } }
        });

        const seasonMap = new Map<string, Season[]>();
        seasonsWithRecipes.forEach(season => {
          season.recipes.forEach(recipe => {
            if (!seasonMap.has(recipe.id)) {
              seasonMap.set(recipe.id, []);
            }
            const { recipes, ...seasonWithoutRecipes } = season;
            seasonMap.get(recipe.id)!.push(seasonWithoutRecipes);
          });
        });

        return recipeIds.map(id => seasonMap.get(id) || []);
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
            tagMap.get(recipe.id)!.push(tagWithoutRecipes);
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
          ingredientMap.get(ingredient.partId!)!.push(ingredient);
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
        return foodIds.map(id => foodMap.get(id) || new Error(`Food with id ${id} not found`));
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );
}
