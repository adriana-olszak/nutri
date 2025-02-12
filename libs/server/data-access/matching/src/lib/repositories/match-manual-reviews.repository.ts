import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateManualReviewDto } from '../types/matching.types';

@Injectable()
export class MatchManualReviewsRepository  extends BaseRepository {
  private readonly entityName = 'MatchManualReview';
  logger = new Logger(MatchManualReviewsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)


  constructor(txService: TransactionService) {
    super(txService);
  }

  async create(dto: CreateManualReviewDto) {
    try {
      return await this.client.matchManualReview.create({
        data: dto,
        include: {
          reviewer: true,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto,
      })

    }
  }

  async findByMatchId(matchId: string) {
    try {
      return await this.client.matchManualReview.findMany({
        where: { matchId },
        include: {
          reviewer: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findByMatchId',
        entityId: matchId,
      })
    }
  }
}
