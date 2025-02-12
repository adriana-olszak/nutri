import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';

@Injectable()
export class FoodNutrientsRepository  extends BaseRepository {
  private readonly entityName = 'FoodNutrient';
  logger = new Logger(FoodNutrientsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)

  constructor(txService: TransactionService) {
    super(txService);
  }
  async findByFoodId(foodId: string) {
    try {
      return await this.client.foodNutrient.findMany({
        where: { foodId },
        include: {
          nutrient: true,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findByFoodId',
        entityId: foodId,
      })
    }
  }

}
