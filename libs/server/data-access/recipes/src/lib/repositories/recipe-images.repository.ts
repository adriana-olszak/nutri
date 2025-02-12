import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';

@Injectable()
export class RecipeImagesRepository extends BaseRepository {
  private readonly entityName = 'RecipeImage';
  logger = new Logger(RecipeImagesRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger);

  constructor(txService: TransactionService) {
    super(txService);
  }

  async findOrCreate(recipeId: string, image: {
    url: string;
    altText: string;
    width: number;
    height: number;
  }) {
    try {
      const imageEntity = await this.client.recipeImage.findFirst({
        where: { url: image.url, recipeId }
      });

      if (!imageEntity) {
        return await this.client.recipeImage.create({
          data: {
            recipeId,
            ...image
          }
        });
      }

      return imageEntity;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findOrCreate',
        data: { recipeId, image }
      });
    }
  }
}
