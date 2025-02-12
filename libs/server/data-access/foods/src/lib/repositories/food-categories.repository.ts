import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';

@Injectable()
export class FoodCategoriesRepository   extends BaseRepository {
  private readonly entityName = 'FoodCategory';
  logger = new Logger(FoodCategoriesRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)


  constructor(txService: TransactionService) {
    super(txService);
  }
  async findMany() {
    try {
        return await this.client.foodCategory.findMany();
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findMany',
      })
    }
  }
}
