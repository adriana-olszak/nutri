import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsIn,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { IStructuredRecipe } from '../interfaces/structured-recipe.interface';
import { ImportRecipeOptionsDto } from './import-recipe-options.dto';

export class ImportRecipeDto implements IStructuredRecipe {
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @Matches(/^[\p{L}\p{N}\s\-']+$/u, {
    message:
      'Title can only contain letters, numbers, spaces, hyphens and apostrophes',
  })
  title!: string;

  @IsString()
  @MaxLength(200)
  sourceId!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100) // Reasonable maximum for ingredients
  @IsString({ each: true })
  @MinLength(2, { each: true })
  @MaxLength(500, { each: true })
  ingredients!: string[];

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(50) // Reasonable maximum for instructions
  @IsString({ each: true })
  @MinLength(10, { each: true })
  @MaxLength(1000, { each: true })
  instructions!: string[];

  @IsOptional()
  @IsString()
  @IsUrl()
  @MaxLength(256)
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  cookingTime?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  prepTime?: string;

  @IsOptional()
  @IsString()
  @Matches(/^(serves|makes)?\s*\d+(-\d+)?\s*(people|servings?)?$/i)
  @MaxLength(50)
  servingsText?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  servingsMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  servingsMax?: number;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  @MaxLength(50, { each: true })
  categories?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(4)
  @IsIn(['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'], { each: true })
  @Transform(({ value }) => value?.map((v: string) => v.toUpperCase()))
  seasons?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(20)
  @IsString({ each: true })
  @MaxLength(50, { each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  @IsIn(['en', 'pl'])
  language?: string = 'en';
}

export class ImportRecipeInputDto {
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => ImportRecipeDto)
  data!: ImportRecipeDto;

  @Type(() => ImportRecipeOptionsDto)
  @ValidateNested()
  @IsNotEmptyObject()
  options!: ImportRecipeOptionsDto;
}
