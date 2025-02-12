import { Type } from 'class-transformer';
import { IsIn, IsNotEmptyObject, IsOptional, IsString, Matches, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { IUnstructuredRecipe } from '../interfaces/unstructured-recipe.interface';
import { IsRecipeText } from '../validators/recipe-text.validator';
import { ImportRecipeOptionsDto } from './import-recipe-options.dto';

export class ImportRecipeTextDto implements IUnstructuredRecipe {
  @IsString()
  @MinLength(50) // Recipes should have reasonable minimum length
  @MaxLength(5000)
  @IsRecipeText()
  @Matches(/^[\p{L}\p{N}\p{P}\s]+$/u, {
    message: 'Text contains invalid characters',
  })
  text!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @Matches(/^[\p{L}\p{N}\s\-']+$/u, {
    message: 'Title can only contain letters, numbers, spaces, hyphens and apostrophes',
  })
  @IsOptional()
  title?: string;

  @IsString()
  @IsIn(['en', 'pl'])
  @IsOptional()
  language?: string = 'en';
}

export class ImportRecipeTextInputDto {
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => ImportRecipeTextDto)
  data!: ImportRecipeTextDto;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => ImportRecipeOptionsDto)
  options!: ImportRecipeOptionsDto;

}
