import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import { Match, MatchFood, Prisma } from '@prisma/client';
import {
    CreateMatchFoodDto,
    ErrorCodes,
    IMatchRepository,
    IngredientMatchingError,
    UpdateMatchStatusDto,
} from '../types';

@Injectable()
export class MatchRepository implements IMatchRepository {
  logger = new Logger(MatchRepository.name);
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async getMatchById(id: string) {
    try {
      const match = await this.prisma.match.findUnique({
        where: { id },
        include: {
          foodMatches: true,
          recipeIngredients: {
            select: {
              id: true,
              ingredientText: true,
            },
          },
        },
      });

      if (!match) {
        throw new IngredientMatchingError(
          ErrorCodes.MATCH_NOT_FOUND,
          `Match with id ${id} not found`,
        );
      }

      return match;
    } catch (error) {
      if (error instanceof IngredientMatchingError) {
        throw error;
      }

      this.logger.error(`Failed to get match by id ${id}`, error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to get match',
        error,
      );
    }
  }

  async createFoodMatches(matches: CreateMatchFoodDto[]): Promise<MatchFood[]> {
    try {
      const data = matches.map(match =>  {
             const createData: Prisma.MatchFoodUncheckedCreateInput = {
               matchId: match.matchId,
               foodId: match.foodId,
               rank: match.rank ?? null,
               confidence: match.confidence ?? null,
               matchQuality: match.matchQuality ?? null,
               matchType: match.matchType ?? 'AUTOMATIC',
               algorithmVersion: match.algorithmVersion ?? null,
               algorithmData: match.algorithmData
                 ? match.algorithmData
                 : Prisma.JsonNull,
             };
             return createData;
           });

      // Use transaction to ensure all matches are created
      return await this.prisma.$transaction(async (tx) => {
        const createdMatches = await Promise.all(
          data.map(matchData =>
            tx.matchFood.create({
              data: matchData,
            }),
          ),
        );

        this.logger.debug(
          `Created ${createdMatches.length} food matches for match ${matches[0].matchId}`,
        );

        return createdMatches;
      });
    } catch (error) {
      this.logger.error('Failed to create food matches', error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to create food matches',
        error,
      );
    }
  }

  async updateMatchStatus(data: UpdateMatchStatusDto): Promise<Match> {
    try {
      return await this.prisma.match.update({
        where: { id: data.id },
        data: { status: data.status },
      });
    } catch (error) {
      this.logger.error(
        `Failed to update status for match ${data.id}`,
        error,
      );
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to update match status',
        error,
      );
    }
  }

  async updateSelectedFoodMatch(
    matchId: string,
    foodMatchId: string,
  ): Promise<Match> {
    try {
      return await this.prisma.match.update({
        where: { id: matchId },
        data: { selectedFoodMatchId: foodMatchId },
      });
    } catch (error) {
      this.logger.error(
        `Failed to update selected food match for match ${matchId}`,
        error,
      );
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to update selected food match',
        error,
      );
    }
  }

  async updateRecipeIngredientsFoodId(
    matchId: string,
    foodId: string,
  ): Promise<void> {
    try {
      await this.prisma.recipeIngredient.updateMany({
        where: { matchId },
        data: { foodId },
      });
    } catch (error) {
      this.logger.error(
        `Failed to update recipe ingredients for match ${matchId}`,
        error,
      );
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to update recipe ingredients',
        error,
      );
    }
  }
}
