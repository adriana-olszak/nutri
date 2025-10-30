import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { EntityHandler, EntityType } from '../types/recipe.types';

@Injectable()
export class RecipeEntitiesRepository extends BaseRepository {
  private readonly entityName = 'RecipeEntities';
  logger = new Logger(RecipeEntitiesRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger);

  private entityHandlers: Record<EntityType, EntityHandler>;

  constructor(txService: TransactionService) {
    super(txService);
    this.entityHandlers = {
      tag: {
        model: this.client.tag,
        connectionField: 'tags'
      }
    };
  }

  async findOrCreateAndConnect(recipeId: string, entityName: string, type: EntityType) {
    try {
      const handler = this.entityHandlers[type];
      let entity = await handler.model.findUnique({
        where: { name: entityName }
      });

      if (!entity) {
        entity = await handler.model.create({
          data: { name: entityName }
        });
      }

      await this.client.recipe.update({
        where: { id: recipeId },
        data: {
          [handler.connectionField]: {
            connect: { id: entity.id }
          }
        }
      });

      return entity;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findOrCreateAndConnect',
        data: { recipeId, entityName, type }
      });
    }
  }
}
