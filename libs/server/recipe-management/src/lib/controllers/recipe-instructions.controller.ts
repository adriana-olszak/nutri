import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRecipeInstructionDto } from '../dtos/recipe-instruction.dto';
import { RecipeInstructionsService } from '../services/recipe-instructions.service';

import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Recipe Instructions')
@Controller('recipes/:recipeId/instructions')
export class RecipeInstructionsController {
  constructor(private readonly recipeInstructionsService: RecipeInstructionsService) {}


  @Post('batch')
  @ApiOperation({ summary: 'Create multiple recipe instructions' })
  @ApiParam({ name: 'recipeId', description: 'Recipe ID' })
  @ApiBody({ type: [CreateRecipeInstructionDto] })
  @ApiResponse({ status: 201, description: 'Instructions created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async createBatch(
    @Param('recipeId') recipeId: string,
    @Body() createDtos: CreateRecipeInstructionDto[]
  ) {
    return this.recipeInstructionsService.createMany(
      createDtos.map(dto => ({
        ...dto,
        recipeId,
      }))
    );
  }

  @Get()
  @ApiOperation({ summary: 'Find all instructions for a recipe' })
  @ApiParam({ name: 'recipeId', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'List of instructions returned' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async findAll(@Param('recipeId') recipeId: string) {
    return this.recipeInstructionsService.findByRecipeId(recipeId);
  }
}
