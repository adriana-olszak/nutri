import { Injectable } from '@nestjs/common';
import { RecipeInstructionsRepository } from '@nutri/server-data-access-recipes';
import { CreateRecipeInstructionDto } from '../dtos/recipe-instruction.dto';

@Injectable()
export class RecipeInstructionsService {
  constructor(
    private readonly recipeInstructionsRepository: RecipeInstructionsRepository,
  ) {}

  async createMany(dtos: CreateRecipeInstructionDto[]) {
    return this.recipeInstructionsRepository.createMany(dtos);
  }

  async findByRecipeId(recipeId: string) {
    return this.recipeInstructionsRepository.findByRecipeId(recipeId);
  }
}
