import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { StatsDService } from '@nutri/server-metrics';
import { QUEUE_NAMES } from '@nutri/server-queue';
import { Job } from 'bullmq';

import { IngredientMatchingService } from '../services/ingredient-matching.service';
import { IngredientMatchJobDto } from './types';

@Processor(QUEUE_NAMES.INGREDIENT_MATCH, {
  concurrency: 2,
})
export class MatchProcessor extends WorkerHost {
  logger = new Logger(MatchProcessor.name);
  constructor(
    private readonly matchingService: IngredientMatchingService,
    private readonly metrics: StatsDService,
  ) {
    super();
  }

  async process(job: Job<IngredientMatchJobDto>): Promise<void> {
    this.logger.log(`Processing match job for matchId: ${job.data.matchId}`);

    try {
      const result = await this.matchingService.processMatch(
        job.data.matchId,
        {
          similarityThreshold: job.data.similarityThreshold,
          maxCandidates: job.data.maxCandidates,
          modelVersion: job.data.modelVersion,
        },
      );

      this.metrics.histogram('ingredient_match.processing_time', Date.now() - job.timestamp);
      this.metrics.increment('ingredient_match.processed');

      if (result.error) {
        throw result.error;
      }

      this.metrics.increment('ingredient_match.success');
      this.logger.log(
        `Successfully processed match job for matchId: ${job.data.matchId}`,
        { status: result.status },
      );

    } catch (error) {
      this.metrics.increment('ingredient_match.errors');
      this.logger.error(
        `Error processing match job for matchId: ${job.data.matchId}`,
        error,
      );
      throw error;
    }
  }
}
