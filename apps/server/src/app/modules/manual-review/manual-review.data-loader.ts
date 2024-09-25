import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { MatchFood } from '../../graphql/models/match-food.model';
import { MatchManualReview } from '../../graphql/models/match-manual-review.model';
import { Food } from '../../graphql/models/food.model';

@Injectable({ scope: Scope.REQUEST })
export class ManualReviewDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchMatchFoods = new DataLoader<string, MatchFood[]>(
    async (matchIds: readonly string[]): Promise<(MatchFood[] | Error)[]> => {
      try {
        const matchFoods = await this.prisma.matchFood.findMany({
          where: { matchId: { in: matchIds as string[] } },
        });

        const matchFoodMap = new Map<string, MatchFood[]>();
        matchFoods.forEach(matchFood => {
          if (!matchFoodMap.has(matchFood.matchId)) {
            matchFoodMap.set(matchFood.matchId, []);
          }
          matchFoodMap.get(matchFood.matchId)?.push(matchFood);
        });

        return matchIds.map(id => matchFoodMap.get(id) || []);
      } catch (error) {
        return matchIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    },
  );

  public readonly batchManualReviews = new DataLoader<string, MatchManualReview[]>(
    async (matchIds: readonly string[]): Promise<(MatchManualReview[] | Error)[]> => {
      try {
        const reviews = await this.prisma.matchManualReview.findMany({
          where: { matchId: { in: matchIds as string[] } },
        });

        const reviewMap = new Map<string, MatchManualReview[]>();
        reviews.forEach(review => {
          if (!reviewMap.has(review.matchId)) {
            reviewMap.set(review.matchId, []);
          }
          reviewMap.get(review.matchId)?.push(review);
        });

        return matchIds.map(id => reviewMap.get(id) || []);
      } catch (error) {
        return matchIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    },
  );

  public readonly batchFoods = new DataLoader<string, Food>(
    async (foodIds: readonly string[]): Promise<(Food | Error)[]> => {
      try {
        const foods = await this.prisma.food.findMany({
          where: { id: { in: foodIds as string[] } },
        });
        const foodMap = new Map(foods.map(food => [food.id, food]));
        return foodIds.map(id => {
          const food = foodMap.get(id);
          return food ? food : new Error(`Food not found for id: ${id}`);
        });
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    },
  );
}
