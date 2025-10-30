import { Injectable } from '@nestjs/common';
import { RecipesRepository } from '@nutri/server-data-access-recipes';
import { CreateRecipeDto } from '../dtos/recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private readonly recipesRepository: RecipesRepository) {}

  async create(dto: CreateRecipeDto) {
    return this.recipesRepository.create(dto);
  }

  async findById(id: string) {
    return this.recipesRepository.findById(id);
  }

  async findAll(searchText?: string) {
    return this.recipesRepository.findMany(searchText);
  }

  async delete(id: string) {
    return this.recipesRepository.delete(id);
  }

  async createPart(recipeId: string, name: string) {
    return this.recipesRepository.createPart(recipeId, name);
  }
}
