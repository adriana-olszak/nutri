import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRecipeDto } from '../dtos/recipe.dto';
import { RecipeIngredientsService } from '../services/recipe-ingredients.service';
import { RecipeInstructionsService } from '../services/recipe-instructions.service';
import { RecipesService } from '../services/recipes.service';

@ApiTags('Recipe Management')
@Controller('recipes')
export class RecipesController {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly recipeIngredientsService: RecipeIngredientsService,
    private readonly recipeInstructionsService: RecipeInstructionsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new recipe' })
  @ApiBody({ type: CreateRecipeDto })
  @ApiResponse({ status: 201, description: 'Recipe successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all recipes' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search term for filtering recipes',
  })
  @ApiResponse({ status: 200, description: 'List of recipes returned' })
  async findAll(@Query('search') search?: string) {
    return this.recipesService.findAll(search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a recipe by ID' })
  @ApiParam({ name: 'id', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'Recipe found' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async findOne(@Param('id') id: string) {
    return this.recipesService.findById(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a recipe' })
  @ApiParam({ name: 'id', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'Recipe successfully deleted' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async remove(@Param('id') id: string) {
    return this.recipesService.delete(id);
  }

  @Get(':id/full')
  @ApiOperation({
    summary: 'Get full recipe details including ingredients and instructions',
  })
  @ApiParam({ name: 'id', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'Complete recipe details returned' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async getFullRecipe(@Param('id') id: string) {
    const recipe = await this.recipesService.findById(id);
    const ingredients = await this.recipeIngredientsService.findByRecipeId(id);
    const instructions = await this.recipeInstructionsService.findByRecipeId(
      id,
    );

    return {
      ...recipe,
      ingredients,
      instructions,
    };
  }

  @Get(':id/cooking-view')
  @ApiOperation({ summary: 'Get recipe in cooking view format' })
  @ApiParam({ name: 'id', description: 'Recipe ID' })
  @ApiResponse({ status: 200, description: 'Cooking view of recipe returned' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async getCookingView(@Param('id') id: string) {
    const recipe = await this.recipesService.findById(id);

    if (!recipe) {
      return new NotFoundException();
    }

    const ingredients = await this.recipeIngredientsService.findByRecipeId(id);
    const instructions = await this.recipeInstructionsService.findByRecipeId(
      id,
    );

    return {
      id: recipe.id,
      title: recipe.title,
      servings:
        recipe.servingsText ||
        `${recipe.servingsMin || ''}-${recipe.servingsMax || ''}`,
      ingredients: ingredients.map((ing) => ({
        id: ing.id,
        text: ing.ingredientText,
        quantity: ing.quantity,
        unit: ing.unit,
        extraInfo: ing.extraInfo,
      })),
      steps: instructions
        .filter((ins) => ins.type === 'TEXT')
        .sort((a, b) => a.order - b.order)
        .map((ins) => ({
          id: ins.id,
          text: ins.content,
          step: ins.order,
        })),
    };
  }

  @Post(':id/parts')
  @ApiOperation({ summary: 'Create a new part for a recipe' })
  @ApiParam({ name: 'id', description: 'Recipe ID' })
  @ApiBody({ schema: { properties: { name: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'Recipe part created successfully' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async createPart(@Param('id') id: string, @Body() body: { name: string }) {
    return this.recipesService.createPart(id, body.name);
  }
}
