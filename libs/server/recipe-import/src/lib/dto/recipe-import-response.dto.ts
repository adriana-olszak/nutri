import { ApiProperty } from '@nestjs/swagger';

export class RecipeImportResponseDto {
  @ApiProperty()
  recipeId!: string;

  @ApiProperty()
  status!: string;

  @ApiProperty({ required: false })
  jobId?: string;

  @ApiProperty({ type: [String], required: false })
  warnings?: string[];

  @ApiProperty({ type: [String], required: false })
  matchIds?: string[];
}
