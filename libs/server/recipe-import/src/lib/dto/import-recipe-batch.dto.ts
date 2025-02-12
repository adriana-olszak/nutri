import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { ImportRecipeDto } from './import-recipe.dto';

export class ImportRecipeBatchDto {
  @ApiProperty({ type: [ImportRecipeDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ImportRecipeDto)
  recipes!: ImportRecipeDto[];
}
