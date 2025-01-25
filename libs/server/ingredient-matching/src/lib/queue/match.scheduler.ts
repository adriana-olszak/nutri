import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { QUEUE_NAMES } from '@nutri/server-queue';
import { Queue } from 'bullmq';
import { IngredientMatchJobDto } from './types';

@Injectable()
export class MatchScheduler {
  constructor(
    @InjectQueue(QUEUE_NAMES.INGREDIENT_MATCH)
    private matchQueue: Queue<IngredientMatchJobDto>,
  ) {}

  async addMatch(
    matchId: string,
    options?: {
      similarityThreshold?: number;
      maxCandidates?: number;
      priority?: number;
    },
  ) {
    return this.matchQueue.add(
      'match',
      {
        matchId,
        similarityThreshold: options?.similarityThreshold,
        maxCandidates: options?.maxCandidates,
      },
      {
        jobId: matchId,
        priority: options?.priority,
      },
    );
  }
}
