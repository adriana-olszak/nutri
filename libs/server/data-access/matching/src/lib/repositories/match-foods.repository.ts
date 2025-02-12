import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateMatchFoodDto } from '../types/matching.types';

@Injectable()
export class MatchFoodsRepository  extends BaseRepository {
  private readonly entityName = 'Matches';
  logger = new Logger(MatchFoodsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)
  constructor(txService: TransactionService) {
    super(txService);
  }


  async create(dto: CreateMatchFoodDto) {
    try {
      return await this.client.matchFood.create({
        data: dto,
        include: {
          food: true,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto
      })
    }
  }

  async createMany(dtos: CreateMatchFoodDto[]) {
    try {
      const result = await this.client.matchFood.createMany({
        data: dtos,
      });

      return result.count;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'createMany',
      })
    }
  }

  async findByMatchId(matchId: string) {
    try {
      return await this.client.matchFood.findMany({
        where: { matchId },
        include: {
          food: true,
        },
        orderBy: {
          rank: 'asc',
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
