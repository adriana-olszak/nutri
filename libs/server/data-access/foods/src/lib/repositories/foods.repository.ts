import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateFoodDto, FoodInclude, FoodWhere, UpdateFoodDto } from '../types/food.types';

@Injectable()
export class FoodsRepository   extends BaseRepository {
  entityName = 'Foods'
  logger = new Logger(FoodsRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)

  constructor(txService: TransactionService) {
    super(txService);
  }
  async create(dto: CreateFoodDto) {
    try {
      return await this.client.food.create({
        data: dto,
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto,
      })
    }
  }

  async findById(id: string, include?: FoodInclude) {
    try {
      return await this.client.food.findUnique({
        where: { id },
        include,
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findById',
        entityId: id,
      })
    }
  }

  async findMany(where?: FoodWhere, include?: FoodInclude) {
    try {
      return await this.client.food.findMany({
        where,
        include,
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findMany',
        data: where,
      })
    }
  }

  async update(id: string, dto: UpdateFoodDto) {
    try {
      return await this.client.food.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'update',
        entityId: id,
      })
    }
  }

  async delete(id: string) {
    try {
      return await this.client.food.delete({
        where: { id },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'delete',
        entityId: id,
      })
    }
  }
}
