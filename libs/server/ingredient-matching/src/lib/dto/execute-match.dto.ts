import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class ExecuteMatchDto {
  @ApiProperty({ description: 'The ID of the match to process' })
  @IsString()
  matchId!: string;

  @ApiProperty({
    description: 'Minimum similarity threshold (0-1)',
    required: false,
    minimum: 0,
    maximum: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  similarityThreshold?: number;

  @ApiProperty({
    description: 'Maximum number of candidates to consider',
    required: false,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maxCandidates?: number;
}
