import { RecipeInstructionsType } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { UIHint } from '../schemas/decorators';

export class CreateRecipeInstructionDto {
  @IsUUID()
  @UIHint({
    hidden: true
  })
  recipeId!: string;

  @IsString()
  @IsNotEmpty()
  @UIHint({
    widget: 'textarea',
    label: 'Instruction',
    placeholder: 'Enter cooking instruction',
    rows: 3,
    order: 1
  })
  content!: string;

  @IsEnum(RecipeInstructionsType)
  @UIHint({
    widget: 'select',
    label: 'Instruction Type',
    options: [
      { label: 'Text', value: RecipeInstructionsType.TEXT },
      { label: 'Image', value: RecipeInstructionsType.IMAGE },
      { label: 'Part', value: RecipeInstructionsType.PART },
    ],
    order: 2
  })
  type!: RecipeInstructionsType;

  @IsInt()
  @Min(1)
  @UIHint({
    widget: 'number',
    label: 'Order',
    min: 1,
    order: 3
  })
  order!: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @UIHint({
    widget: 'number',
    label: 'List Index',
    min: 1,
    order: 4,
    conditional: {
      field: 'type',
      value: RecipeInstructionsType.PART,
    }
  })
  listIndex?: number;
}

export class UpdateRecipeInstructionDto extends CreateRecipeInstructionDto {}

export class RecipeInstructionResponseDto extends CreateRecipeInstructionDto {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
