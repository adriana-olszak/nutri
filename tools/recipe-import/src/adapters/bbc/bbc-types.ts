import { Transform, Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsOptional,
    IsString,
    IsUrl,
    ValidateNested,
} from 'class-validator';

export class BBCRecipe {
  @IsString()
  @Transform(({ value }) => value?.trim())
  Name!: string;

  @IsUrl()
  url!: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim())
  Description?: string;

  @IsString()
  @IsOptional()
  Author?: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  @Transform(({ value }) => value.map((v: string) => v.trim()))
  Ingredients!: string[];

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  @Transform(({ value }) => value.map((v: string) => v.trim()))
  Method!: string[];
}

export class BBCRecipeFile {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BBCRecipe)
  recipes!: BBCRecipe[];
}
