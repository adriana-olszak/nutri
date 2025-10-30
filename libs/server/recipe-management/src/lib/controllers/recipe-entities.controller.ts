import { Body, Controller, Param, Post } from '@nestjs/common';
import { RecipeEntitiesService } from '../services/recipe-entities.service';

@Controller('recipes/:recipeId/entities')
export class RecipeEntitiesController {
  constructor(private readonly recipeEntitiesService: RecipeEntitiesService) {}

  @Post('tags')
  async addTag(
    @Param('recipeId') recipeId: string,
    @Body() body: { name: string }
  ) {
    return this.recipeEntitiesService.findOrCreateAndConnect(
      recipeId,
      body.name,
      'tag'
    );
  }
}
