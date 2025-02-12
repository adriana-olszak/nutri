import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { MatchStatus, Prisma } from '@prisma/client';
import {
    CreateMatchDto,
    Match,
    MatchWithRelations,
} from '../types/matching.types';

@Injectable()
export class MatchRepository extends BaseRepository {
  private readonly entityName = 'Match';
  logger = new Logger(MatchRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger);

  constructor(txService: TransactionService) {
    super(txService);
  }

  async create(dto: CreateMatchDto) {
    try {
      return await this.client.match.create({
        data: {
          ingredientText: dto.ingredientText,
          status: dto.status ?? MatchStatus.PENDING_MATCH,
          recipeIngredients: {
            connect: {
              id: dto.recipeIngredientId,
            },
          },
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto,
      });
    }
  }

  async findById(id: string): Promise<MatchWithRelations | null> {
    try {
      const match = await this.client.match.findUniqueOrThrow({
        where: { id },
        select: {
          id: true,
          status: true,
          ingredientText: true,
          selectedFoodMatch: {
            select: {
              id: true,
              food: {
                select: {
                  id: true,
                  description: true,
                },
              },
            },
          },
          foodMatches: {
            select: {
              id: true,
              rank: true,
              confidence: true,
              matchQuality: true,
              food: {
                select: {
                  id: true,
                  description: true,
                },
              },
            },
            orderBy: {
              rank: 'asc',
            },
          },
        },
      });

      return match;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findById',
        entityId: id,
      });
    }
  }

  async paginareWhere(
    limit: number,
    where: Prisma.MatchWhereInput,
    cursor?: string,
  ): Promise<{
    matches: Match[];
    nextCursor?: string;
  }> {
    try {
      const matches = await this.client.match.findMany({
        where,
        take: limit,
        ...(cursor && {
          skip: 1,
          cursor: {
            id: cursor,
          },
        }),
        orderBy: {
          id: 'asc',
        },
      });

      const nextCursor =
        matches.length > 0 ? matches[matches.length - 1].id : undefined;

      return {
        matches,
        nextCursor,
      };
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'getUnprocessedMatchesCursor',
      });
    }
  }

  async updateStatus(id: string, status: MatchStatus) {
    try {
      return await this.client.match.update({
        where: { id },
        data: { status },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'update',
        entityId: id,
        data: { status },
      });
    }
  }

  async setSelectedFoodMatch(id: string, foodMatchId: string) {
    try {
      return await this.client.match.update({
        where: { id },
        data: {
          selectedFoodMatchId: foodMatchId,
          status: MatchStatus.AUTO_APPROVED,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'setSelectedFoodMatch',
        entityId: id,
        data: { foodMatchId },
      });
    }
  }
}
