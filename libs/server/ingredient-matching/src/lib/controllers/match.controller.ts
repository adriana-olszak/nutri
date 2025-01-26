
import {
    BadRequestException,
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Logger,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExecuteMatchDto } from '../dto/execute-match.dto';
import { MatchResultDto } from '../dto/match-response.dto';
import { ScheduleMatchDto } from '../dto/schedule-match.dto';
import { MatchScheduler } from '../queue/match.scheduler';
import { IngredientMatchingService } from '../services/ingredient-matching.service';
import { IngredientMatchingError } from '../types';

@ApiTags('Ingredient Matching')
@Controller('ingredient-matching')
export class MatchController {
  private readonly logger = new Logger(MatchController.name);

  constructor(
    private readonly matchScheduler: MatchScheduler,
    private readonly matchingService: IngredientMatchingService,
  ) {}

  @Post('schedule')
  @ApiOperation({ summary: 'Schedule an ingredient match for processing' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Match has been scheduled'
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async scheduleMatch(
    @Body() dto: ScheduleMatchDto,
  ): Promise<{ scheduled: boolean }> {
    this.logger.debug('Scheduling match', dto);

    await this.matchScheduler.addMatchJob(dto.matchId, {
      similarityThreshold: dto.similarityThreshold,
      maxCandidates: dto.maxCandidates,
      priority: dto.priority,
    });

    return { scheduled: true };
  }

  @Post('execute')
  @ApiOperation({ summary: 'Execute ingredient matching immediately' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Match processed successfully',
    type: MatchResultDto,
  })
  @HttpCode(HttpStatus.OK)
  async executeMatch(@Body() dto: ExecuteMatchDto): Promise<MatchResultDto> {
    this.logger.debug('Executing match directly', dto);

    const startTime = Date.now();

    try {
      const result = await this.matchingService.processMatch(
        dto.matchId,
        {
          similarityThreshold: dto.similarityThreshold,
          maxCandidates: dto.maxCandidates,
        },
      );

      const response: MatchResultDto = {
        matchId: result.matchId,
        status: result.status,
        processingTimeMs: Date.now() - startTime,
      };

      this.logger.debug('Match executed successfully', {
        matchId: dto.matchId,
        status: result.status,
        processingTime: response.processingTimeMs,
      });

      return response;

    } catch (error) {
      this.logger.error(
        `Failed to execute match ${dto.matchId}`,
        error instanceof Error ? error.stack : error,
      );

      if (error instanceof IngredientMatchingError) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }
}
