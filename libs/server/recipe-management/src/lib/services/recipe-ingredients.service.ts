import { Injectable } from '@nestjs/common';
import { RecipeIngredientsRepository } from '@nutri/server-data-access-recipes';
import { CreateRecipeIngredientDto } from '../dtos/recipe-ingredient.dto';

@Injectable()
export class RecipeIngredientsService {
  constructor(
    private readonly recipeIngredientsRepository: RecipeIngredientsRepository,
  ) {}

  async create(dto: CreateRecipeIngredientDto) {
    return this.recipeIngredientsRepository.create(dto);
  }

  async createMany(dtos: CreateRecipeIngredientDto[]) {
    return this.recipeIngredientsRepository.createMany(dtos);
  }

  async findByRecipeId(recipeId: string) {
    return this.recipeIngredientsRepository.findByRecipeId(recipeId);
  }
}
