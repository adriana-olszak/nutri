import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRecipeIngredientDto } from '../dtos/recipe-ingredient.dto';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';

@ApiTags('Recipe Ingredients')
@Controller('recipes/:recipeId/ingredients')
export class RecipeIngredientsController {
  constructor(private readonly recipeIngredientsService: RecipeIngredientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a recipe ingredient' })
  @ApiParam({ name: 'recipeId', description: 'Recipe ID' })
  @ApiBody({ type: CreateRecipeIngredientDto })
  @ApiResponse({ status: 201, description: 'Ingredient created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(
    @Param('recipeId') recipeId: string,
    @Body() createDto: CreateRecipeIngredientDto
  ) {
    return this.recipeIngredientsService.create({
      ...createDto,
      recipeId,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Find all ingredients for a recipe' })
  @ApiParam({ name: 'recipeId', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'List of ingredients returned' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async findAll(@Param('recipeId') recipeId: string) {
    return this.recipeIngredientsService.findByRecipeId(recipeId);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Create multiple recipe ingredients' })
  @ApiParam({ name: 'recipeId', description: 'Recipe ID' })
  @ApiBody({ type: [CreateRecipeIngredientDto] })
  @ApiResponse({ status: 201, description: 'Ingredients created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async createBatch(
    @Param('recipeId') recipeId: string,
    @Body() createDtos: CreateRecipeIngredientDto[]
  ) {
    return this.recipeIngredientsService.createMany(
      createDtos.map(dto => ({
        ...dto,
        recipeId,
      }))
    );
  }
}
