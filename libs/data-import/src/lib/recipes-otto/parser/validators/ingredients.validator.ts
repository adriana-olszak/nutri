import {
  IsString,
  IsArray,
  ValidateNested,
  validateSync,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ParagraphNode } from './common.validator';

export class IngredientRoot {
  @IsString()
  type!: 'root';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParagraphNode)
  children!: ParagraphNode[];
}

export function validateIngredients(data: any): IngredientRoot {
  const ingredientRoot = new IngredientRoot();
  Object.assign(ingredientRoot, data);

  const errors = validateSync(ingredientRoot, { forbidUnknownValues: true, whitelist: true });
  if (errors.length > 0) {
    errors.map(e => console.error(e));
    throw new Error('Invalid ingredient data');
  }

  return ingredientRoot;
}
