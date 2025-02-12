import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class AlternativeQuantity {
  @IsNumber()
  quantity: number;

  @IsString()
  unit: string;

  @IsString()
  unitText: string;

  @IsNumber()
  minQuantity: number;

  @IsNumber()
  maxQuantity: number;
}

class InstructionStep {
  @IsString()
  type: string;

  @IsString()
  content: string;

  @IsOptional()
  stepNumber?: number;

  @IsOptional()
  listIndex?: number;
}
class Ingredient {
  @IsNumber()
  quantity: number;

  @IsString()
  quantityText: string;

  @IsNumber()
  minQuantity: number;

  @IsNumber()
  maxQuantity: number;

  @IsString()
  unit: string;

  @IsString()
  unitText: string;

  @IsString()
  ingredient: string;

  @IsString()
  extra: string;

  @IsArray()
  @ValidateNested()
  @Type(() => AlternativeQuantity)
  alternativeQuantities: AlternativeQuantity[];
}

class ImageData {
  @IsString()
  url: string;

  @IsString()
  altText?: string;

  @IsOptional()
  width?: number;

  @IsOptional()
  height?: number;
}

export class OttoRecipe {
  @IsString()
  sourceId: string;

  @IsString()
  title: string;

  @IsString()
  sourceUrl: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  cookingTime?: string;

  @IsString()
  @IsOptional()
  prepTime?: string;

  @IsString()
  @IsOptional()
  servingsText: string;

  @IsArray()
  @IsString({each: true})
  instructions: string[];

  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsArray()
  @IsString({ each: true })
  seasons: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => ImageData)
  images?: ImageData[];

  @IsArray()
  @IsString({ each: true })
  ingredients: string[];
}
