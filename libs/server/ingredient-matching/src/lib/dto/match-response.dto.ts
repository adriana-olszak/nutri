import { ApiProperty } from '@nestjs/swagger';
import { MatchQuality, MatchStatus } from '@prisma/client';

export class MatchResultDto {
  @ApiProperty()
  matchId!: string;

  @ApiProperty({ enum: MatchStatus })
  status!: MatchStatus;

  @ApiProperty({ required: false })
  selectedFood?: {
    id: string;
    description?: string;
    confidence?: number;
    quality?: MatchQuality;
  };

  @ApiProperty({ required: false })
  candidates?: Array<{
    id: string;
    description: string;
    confidence: number;
    quality: MatchQuality;
  }>;

  @ApiProperty()
  processingTimeMs!: number;
}
