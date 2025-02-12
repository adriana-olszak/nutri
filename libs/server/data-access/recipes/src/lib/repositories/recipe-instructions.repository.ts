import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateRecipeInstructionDto } from '../types/recipe.types';

@Injectable()
export class RecipeInstructionsRepository extends BaseRepository {
  private readonly entityName = 'Matches';
  logger = new Logger(RecipeInstructionsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)
  constructor(txService: TransactionService) {
    super(txService);
  }
  async createMany(dtos: CreateRecipeInstructionDto[]) {
    try {
      return await this.client.recipeInstructions.createMany({
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
      return await this.client.recipeInstructions.findMany({
        where: { recipeId },
        orderBy: {
          order: 'asc',
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findByRecipeId',
        entityId: recipeId
      })
    }
  }
}
