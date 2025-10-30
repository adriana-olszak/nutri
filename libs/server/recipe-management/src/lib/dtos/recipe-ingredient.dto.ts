import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { UIHint } from '../schemas/decorators';

export class CreateRecipeIngredientDto {
  @IsUUID()
  @UIHint({
    hidden: true
  })
  recipeId!: string;

  @IsOptional()
  @IsUUID()
  @UIHint({
    widget: 'select',
    label: 'Recipe Part',
    dataSource: '/api/recipes/{recipeId}/parts',
    order: 1
  })
  partId?: string;

  @IsNumber()
  @Min(0)
  @UIHint({
    widget: 'number',
    label: 'Quantity',
    min: 0,
    step: 0.01,
    order: 2
  })
  quantity!: number;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Quantity Text',
    placeholder: 'e.g., a pinch',
    order: 3
  })
  quantityText?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @UIHint({
    widget: 'number',
    label: 'Minimum Quantity',
    min: 0,
    step: 0.01,
    order: 4
  })
  minQuantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @UIHint({
    widget: 'number',
    label: 'Maximum Quantity',
    min: 0,
    step: 0.01,
    order: 5
  })
  maxQuantity?: number;

  @IsString()
  @IsNotEmpty()
  @UIHint({
    widget: 'select',
    label: 'Unit',
    options: [
      { label: 'grams (g)', value: 'g' },
      { label: 'kilograms (kg)', value: 'kg' },
      { label: 'milliliters (ml)', value: 'ml' },
      { label: 'liters (l)', value: 'l' },
      { label: 'teaspoon (tsp)', value: 'tsp' },
      { label: 'tablespoon (tbsp)', value: 'tbsp' },
      { label: 'cup', value: 'cup' },
      { label: 'piece', value: 'piece' },
      { label: 'to taste', value: 'to taste' },
    ],
    order: 6
  })
  unit!: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'text',
    label: 'Unit Text',
    placeholder: 'Custom unit',
    order: 7
  })
  unitText?: string;

  @IsString()
  @IsNotEmpty()
  @UIHint({
    widget: 'autocomplete',
    label: 'Ingredient',
    placeholder: 'Enter ingredient name',
    dataSource: '/api/foods/search',
    queryParam: 'q',
    minChars: 2,
    debounceMs: 300,
    order: 8
  })
  ingredientText!: string;

  @IsOptional()
  @IsString()
  @UIHint({
    widget: 'textarea',
    label: 'Extra Info',
    placeholder: 'e.g., finely chopped',
    rows: 2,
    order: 9
  })
  extraInfo?: string;

  @IsOptional()
  @IsUUID()
  @UIHint({
    hidden: true
  })
  foodId?: string;
}

export class UpdateRecipeIngredientDto extends CreateRecipeIngredientDto {}

export class RecipeIngredientResponseDto extends CreateRecipeIngredientDto {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
