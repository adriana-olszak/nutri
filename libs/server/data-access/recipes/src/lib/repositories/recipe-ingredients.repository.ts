import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateRecipeIngredientDto } from '../types/recipe.types';

@Injectable()
export class RecipeIngredientsRepository  extends BaseRepository {
  private readonly entityName = 'RecipeIngredient';
  logger = new Logger(RecipeIngredientsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)

  constructor(txService: TransactionService) {
    super(txService);
  }
  async create(dto: CreateRecipeIngredientDto) {
    try {
      return await this.client.recipeIngredient.create({
        data: dto,
        include: {
          food: true,
          part: true,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto
      })
    }
  }




  async createMany(dtos: CreateRecipeIngredientDto[]) {
    try {
      return await this.client.recipeIngredient.createMany({
        data: dtos,
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'createMany',
      })
    }
  }

  async findByRecipeId(recipeId: string) {
    try {
      return await this.client.recipeIngredient.findMany({
        where: { recipeId },
        include: {
          food: true,
          part: true,
          match: {
            include: {
              selectedFoodMatch: {
                include: {
                  food: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findByRecipeId',
        entityId: recipeId,
      })
    }
  }

  async setFoodId(
    matchId: string,
    foodId: string,
  ): Promise<void> {
    try {
      await this.client.recipeIngredient.updateMany({
        where: { matchId },
        data: { foodId },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'setFoodId',
        entityId: matchId,
      })
    }
  }
  async setMatchId(
    id: string,
    foodId: string,
  ): Promise<void> {
    try {
      await this.client.recipeIngredient.updateMany({
        where: { id },
        data: { foodId },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'setFoodId',
        entityId: id,
      })
    }
  }

}
