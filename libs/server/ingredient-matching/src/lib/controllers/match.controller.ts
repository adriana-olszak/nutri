import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post
} from '@nestjs/common';
import { ScheduleMatchDto } from '../dto/schedule-match.dto';
import { MatchScheduler } from '../queue/match.scheduler';

@Controller('ingredient-matching')
export class MatchController {
  constructor(private readonly matchScheduler: MatchScheduler) {}

  @Post('schedule')
  @HttpCode(HttpStatus.ACCEPTED)
  async scheduleMatch(@Body() dto: ScheduleMatchDto): Promise<{ scheduled: boolean }> {
    await this.matchScheduler.addMatch(
      dto.matchId,
      {
        similarityThreshold: dto.similarityThreshold,
        maxCandidates: dto.maxCandidates,
        priority: dto.priority,
      },
    );

    return { scheduled: true };
  }
}
