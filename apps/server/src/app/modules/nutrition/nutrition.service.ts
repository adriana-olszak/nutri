import { Injectable } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import { NutritionalValue } from '../../graphql/models/nutritional-value.model';

@Injectable()
export class NutritionService {
  constructor(private prisma: PrismaService) {
  }

  async calculateFoodNutritionalValue(foodId: string, amount: number): Promise<NutritionalValue> {
    const food = await this.prisma.food.findUnique({
      where: { id: foodId },
      include: { nutrients: { include: { nutrient: true } } }
    });

    if (!food) {
      throw new Error('Food not found');
    }

    return this.calculateNutritionalValue(food.nutrients, amount);
  }

  async calculateRecipeNutritionalValue(recipeId: string, servings = 1): Promise<NutritionalValue> {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
      include: {
        ingredients: {
          include: {
            food: {
              include: {
                nutrients: {
                  include: { nutrient: true }
                }
              }
            }
          }
        }
      }
    });

    if (!recipe) {
      throw new Error('Recipe not found');
    }

    const allNutrients = recipe.ingredients.flatMap(ingredient =>
      ingredient.food.nutrients.map(nutrient => ({
        ...nutrient,
        amount: (nutrient.amount * ingredient.quantity) / 100 // Convert to ingredient quantity
      }))
    );

    return this.calculateNutritionalValue(allNutrients, 1 / servings);
  }

  async calculateRecipeIngredientNutritionalValue(recipeIngredientId: string, servings = 1): Promise<NutritionalValue> {
    const recipeIngredients = await this.prisma.recipeIngredient.findUnique({
      where: { id: recipeIngredientId },
      include: {
        food: {
          include: {
            nutrients: {
              include: { nutrient: true }
            }
          }
        }
      }
    });

    if (!recipeIngredients) {
      throw new Error('recipeIngredients not found');
    }

    // TODO add measure normalization from common to grams first
    const allNutrients = recipeIngredients.food.nutrients.map(nutrient => ({
      ...nutrient,
      amount: (nutrient.amount * recipeIngredients.quantity) / 100 // Convert to ingredient quantity
    }));

    return this.calculateNutritionalValue(allNutrients, 1 / servings);
  }

  async calculateRecipePartNutritionalValue(recipePartId: string, servings = 1): Promise<NutritionalValue> {
    const recipePart = await this.prisma.recipePart.findUnique({
      where: { id: recipePartId },
      include: {
        ingredients: {
          include: {
            food: {
              include: {
                nutrients: {
                  include: { nutrient: true }
                }
              }
            }
          }
        }
      }
    });

    if (!recipePart) {
      throw new Error('Recipe not found');
    }

    const allNutrients = recipePart.ingredients.flatMap(ingredient =>
      ingredient.food.nutrients.map(nutrient => ({
        ...nutrient,
        amount: (nutrient.amount * ingredient.quantity) / 100 // Convert to ingredient quantity
      }))
    );

    return this.calculateNutritionalValue(allNutrients, 1 / servings);
  }

  private calculateNutritionalValue(nutrients: any[], multiplier: number): NutritionalValue {
    const nutritionalValue: NutritionalValue = {
      calories: null,
      totalFat: null,
      saturatedFat: null,
      transFat: null,
      cholesterol: null,
      sodium: null,
      totalCarbohydrate: null,
      dietaryFiber: null,
      totalSugars: null,
      addedSugars: null,
      protein: null,
      vitaminA: null,
      vitaminB: null,
      vitaminC: null,
      vitaminD: null,
      calcium: null,
      iron: null,
      potassium: null
    };

    nutrients.forEach((nutrient) => {
      const value = nutrient.amount * multiplier;
      switch (nutrient.nutrient.name.toLowerCase()) {
        case 'energy':
          nutritionalValue.calories = (nutritionalValue.calories || 0) + value;
          break;
        case 'total fat':
          nutritionalValue.totalFat = (nutritionalValue.totalFat || 0) + value;
          break;
        // Add cases for other nutrients...
      }
    });

    return nutritionalValue;
  }
}
