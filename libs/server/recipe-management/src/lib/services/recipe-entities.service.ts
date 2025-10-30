import { Injectable } from '@nestjs/common';
import { EntityType, RecipeEntitiesRepository } from '@nutri/server-data-access-recipes';

@Injectable()
export class RecipeEntitiesService {
  constructor(
    private readonly recipeEntitiesRepository: RecipeEntitiesRepository,
  ) {}

  async findOrCreateAndConnect(recipeId: string, name: string, type: EntityType) {
    return this.recipeEntitiesRepository.findOrCreateAndConnect(
      recipeId,
      name,
      type,
    );
  }
}
