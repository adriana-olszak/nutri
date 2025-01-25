import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

@InputType()
export class ScheduleMatchInput {
  @Field()
  @IsString()
  matchId!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  similarityThreshold?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  maxCandidates?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  priority?: number;
}

// For REST API
export class ScheduleMatchDto extends ScheduleMatchInput {}
