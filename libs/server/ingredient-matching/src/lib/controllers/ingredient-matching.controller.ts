
import {
    BadRequestException,
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Logger,
    Param,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MatchRepository } from '@nutri/server-data-access-matching';
import { ExecuteMatchDto } from '../dto/execute-match.dto';
import { MatchResultDto } from '../dto/match-response.dto';
import { ScheduleBatchMatchDto } from '../dto/schedule-batch-match.dto';
import { ScheduleMatchDto } from '../dto/schedule-match.dto';
import { IngredientMatchingException } from '../exceptions';
import { MatchScheduler } from '../queue/match.scheduler';
import { IngredientMatchingService } from '../services/ingredient-matching.service';

@ApiTags('Ingredient Matching')
@Controller('matches')
export class IngredientMatchingController {
  private readonly logger = new Logger(IngredientMatchingController.name);

  constructor(
    private readonly jobService: MatchScheduler,
    private readonly matcherService: IngredientMatchingService,
    private readonly matchRepository: MatchRepository,

  ) {}

  @Post(':matchId/schedule')
  @ApiOperation({ summary: 'Schedule ingredient matching' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Match has been scheduled'
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async scheduleMatch(
@Param('matchId') matchId: string,
    @Body() dto: ScheduleMatchDto,
  ): Promise<{ scheduled: boolean }> {
    this.logger.debug('Scheduling match', dto);

    await this.jobService.addMatchJob(dto.matchId, {
      similarityThreshold: dto.similarityThreshold,
      maxCandidates: dto.maxCandidates,
      priority: dto.priority,
    });

    return { scheduled: true };
  }

  @Post(':matchId/execute')
  @ApiOperation({ summary: 'Execute ingredient matching immediately' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Match processed successfully',
    type: MatchResultDto,
  })
  @HttpCode(HttpStatus.OK)
  async executeMatch(
    @Param('matchId') matchId: string,
    @Body() dto: ExecuteMatchDto): Promise<MatchResultDto> {
    this.logger.debug('Executing match directly', dto);

    const startTime = Date.now();

    try {
      const result = await this.matcherService.processMatch(
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

      if (error instanceof IngredientMatchingException) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }


  @Post('schedule-batch')
  @ApiOperation({ summary: 'Schedule multiple matches for processing' })
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Matches have been scheduled for processing'
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async scheduleBatchMatches(
    @Body() dto: ScheduleBatchMatchDto,
  ): Promise<{ scheduledCount: number }> {
    this.logger.debug('Scheduling batch matches', dto);

    try {
      const BATCH_SIZE = 1000;
      let processedCount = 0;
      let cursor: string | undefined;

      while (processedCount < dto.limit) {
        const batchLimit = Math.min(BATCH_SIZE, dto.limit - processedCount);
        const { matches, nextCursor } = await this.matchRepository.paginareWhere(
          batchLimit,
          {
            status: 'PENDING_MATCH',
          },
          cursor
        );

        if (matches.length === 0) {
          break;
        }

        const schedulePromises = matches.map(match =>
          this.jobService.addMatchJob(match.id, {
            similarityThreshold: dto.similarityThreshold,
            maxCandidates: dto.maxCandidates,
            priority: dto.priority,
          })
        );

        await Promise.all(schedulePromises);

        processedCount += matches.length;
        cursor = nextCursor;

        const progress = (processedCount / dto.limit) * 100;
        this.logger.debug(
          `Scheduled batch: ${matches.length} matches. ` +
          `Progress: ${progress.toFixed(2)}% (${processedCount}/${dto.limit})`
        );

        if (!nextCursor) {
          break;
        }
      }

      return { scheduledCount: processedCount };
    } catch (error) {
      this.logger.error('Failed to schedule batch matches', error);
      throw error;
    }
  }
}
