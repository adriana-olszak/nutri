import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RecipeSchemasService } from '../services/recipe-schemas.service';

@ApiTags('Recipe Schemas')
@Controller('schemas')
export class RecipeSchemasController {
  constructor(private readonly recipeSchemasService: RecipeSchemasService) {}

  @Get('recipe/:operation')
  @ApiOperation({ summary: 'Get recipe JSON schema for specific operation' })
  @ApiParam({
    name: 'operation',
    description: 'Operation type (create, update, etc.)',
  })
  @ApiResponse({ status: 200, description: 'Schema returned successfully' })
  async getRecipeSchema(@Param('operation') operation: string) {
    return this.recipeSchemasService.getSchema('recipe', operation);
  }

  @Get('recipe-ingredient/:operation')
  @ApiOperation({
    summary: 'Get recipe ingredient JSON schema for specific operation',
  })
  @ApiParam({
    name: 'operation',
    description: 'Operation type (create, update, etc.)',
  })
  @ApiResponse({ status: 200, description: 'Schema returned successfully' })
  async getIngredientSchema(@Param('operation') operation: string) {
    return this.recipeSchemasService.getSchema('recipe-ingredient', operation);
  }

  @Get('recipe-instruction/:operation')
  @ApiOperation({
    summary: 'Get recipe instruction JSON schema for specific operation',
  })
  @ApiParam({
    name: 'operation',
    description: 'Operation type (create, update, etc.)',
  })
  @ApiResponse({ status: 200, description: 'Schema returned successfully' })
  async getInstructionSchema(@Param('operation') operation: string) {
    return this.recipeSchemasService.getSchema('recipe-instruction', operation);
  }
}
