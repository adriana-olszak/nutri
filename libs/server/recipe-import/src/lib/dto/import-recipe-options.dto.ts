import { ApiProperty } from "@nestjs/swagger";

export class ImportRecipeOptionsDto {
  @ApiProperty({ required: false })
  language?: string;

  @ApiProperty({ required: false })
  autoMatchIngredients?: boolean;

  @ApiProperty({ required: false })
  validateIngredients?: boolean;

  @ApiProperty({ required: false })
  skipDuplicates?: boolean;
}
