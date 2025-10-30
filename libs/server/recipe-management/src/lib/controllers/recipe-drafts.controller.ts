import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRecipeIngredientDto } from '../dtos/recipe-ingredient.dto';
import { CreateRecipeInstructionDto } from '../dtos/recipe-instruction.dto';
import { CreateRecipeDto } from '../dtos/recipe.dto';
import { RecipeDraftsService } from '../services/recipe-drafts.service';
import { RecipeSchemasService } from '../services/recipe-schemas.service';

@ApiTags('Recipe Drafts')
@Controller('recipes/drafts')
export class RecipeDraftsController {
  constructor(
    private readonly recipeDraftsService: RecipeDraftsService,
    private readonly recipeSchemasService: RecipeSchemasService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new recipe draft' })
  @ApiResponse({ status: 201, description: 'Draft created successfully' })
  async createDraft() {
    return this.recipeDraftsService.createDraft();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a recipe draft by ID' })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiResponse({ status: 200, description: 'Draft found' })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async getDraft(@Param('id') id: string) {
    return this.recipeDraftsService.getDraft(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update basic recipe draft information' })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiBody({ type: CreateRecipeDto })
  @ApiResponse({ status: 200, description: 'Draft updated successfully' })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async updateDraftBasic(
    @Param('id') id: string,
    @Body() updateDto: CreateRecipeDto,
  ) {
    return this.recipeDraftsService.updateDraftBasic(id, updateDto);
  }

  @Put(':id/ingredients')
  @ApiOperation({ summary: 'Update ingredients in a recipe draft' })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiBody({ type: [CreateRecipeIngredientDto] })
  @ApiResponse({
    status: 200,
    description: 'Draft ingredients updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async updateDraftIngredients(
    @Param('id') id: string,
    @Body() ingredients: CreateRecipeIngredientDto[],
  ) {
    return this.recipeDraftsService.updateDraftIngredients(id, ingredients);
  }

  @Put(':id/steps')
  @ApiOperation({ summary: 'Update instructions in a recipe draft' })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiBody({ type: [CreateRecipeInstructionDto] })
  @ApiResponse({
    status: 200,
    description: 'Draft instructions updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async updateDraftInstructions(
    @Param('id') id: string,
    @Body() instructions: CreateRecipeInstructionDto[],
  ) {
    return this.recipeDraftsService.updateDraftInstructions(id, instructions);
  }

  @Post(':id/finalize')
  @ApiOperation({
    summary: 'Finalize a recipe draft to create a complete recipe',
  })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiResponse({ status: 201, description: 'Draft finalized successfully' })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async finalizeDraft(@Param('id') id: string) {
    return this.recipeDraftsService.finalizeDraft(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a recipe draft' })
  @ApiParam({ name: 'id', description: 'Draft ID' })
  @ApiResponse({ status: 200, description: 'Draft deleted successfully' })
  @ApiResponse({ status: 404, description: 'Draft not found' })
  async deleteDraft(@Param('id') id: string) {
    return { success: await this.recipeDraftsService.deleteDraft(id) };
  }
}
