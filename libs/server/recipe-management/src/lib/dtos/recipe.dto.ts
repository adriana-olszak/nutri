import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Length, Min } from 'class-validator';
import { UIHint } from '../schemas/decorators';

export class CreateRecipeDto {
  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  @UIHint({
    widget: 'text',
    label: 'Recipe Title',
    placeholder: 'Enter recipe title',
    order: 1
  })
  title!: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'textarea',
    label: 'Description',
    placeholder: 'Describe your recipe',
    rows: 3,
    order: 2
  })
  description?: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Source ID',
    placeholder: 'Original recipe identifier (if applicable)',
    order: 3
  })
  sourceId?: string;

  @IsOptional()
  @IsUrl()
  @UIHint({
    widget: 'url',
    label: 'Source URL',
    placeholder: 'https://example.com/recipe',
    order: 4
  })
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Cooking Time',
    placeholder: 'e.g., 30 minutes',
    order: 5
  })
  cookingTime?: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Preparation Time',
    placeholder: 'e.g., 15 minutes',
    order: 6
  })
  prepTime?: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Servings',
    placeholder: 'e.g., Serves 4-6',
    order: 7
  })
  servingsText?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @UIHint({
    widget: 'number',
    label: 'Minimum Servings',
    min: 1,
    order: 8
  })
  servingsMin?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @UIHint({
    widget: 'number',
    label: 'Maximum Servings',
    min: 1,
    order: 9
  })
  servingsMax?: number;

  @IsOptional()
  @IsArray()
  @UIHint({
    widget: 'tags',
    label: 'Tags',
    placeholder: 'Add tags',
    order: 10,
    dataSource: '/api/tags/search'
  })
  tagIds?: string[];
}

export class UpdateRecipeDto extends CreateRecipeDto {}

export class RecipeResponseDto extends CreateRecipeDto {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
