import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository, TransactionService } from '@nutri/server-db-client';
import { ErrorHandlerFacade } from '@nutri/server-shared';
import { CreateRecipeDto, RecipeWithRelations } from '../types/recipe.types';

@Injectable()
export class RecipesRepository extends BaseRepository {
  private readonly entityName = 'Matches';
  logger = new Logger(RecipesRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)

  constructor(txService: TransactionService,
  ) {
    super(txService);
  }
  async create(dto: CreateRecipeDto) {
    try {
      return await this.client.recipe.create({
        data: {
          ...dto,
          categories: dto.categoryIds ? {
            connect: dto.categoryIds.map(id => ({ id })),
          } : undefined,
          seasons: dto.seasonIds ? {
            connect: dto.seasonIds.map(id => ({ id })),
          } : undefined,
          tags: dto.tagIds ? {
            connect: dto.tagIds.map(id => ({ id })),
          } : undefined,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data:dto
      })
    }
  }

  async createPart(recipeId: string, name: string) {
    try {
      return  await this.client.recipePart.create({
        data: {
          name,
          recipeId
        }
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'createPart',
        entityId: recipeId,
        data: {
          name
        }
      })
    }
  }

  async findById(id: string): Promise<RecipeWithRelations | null> {
    try {
      return await this.client.recipe.findUnique({
        where: { id },
        include: {
          ingredients: {
            include: {
              food: true,
            },
          },
          instructions: {
            orderBy: {
              order: 'asc',
            },
          },
          categories: true,
          tags: true,
          seasons: true,
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findById',
        entityId: id,
      })
    }
  }

  async findMany(searchText?: string) {
    try {
      return await this.client.recipe.findMany({
        where: searchText ? {
          OR: [
            { title: { contains: searchText, mode: 'insensitive' } },
            { description: { contains: searchText, mode: 'insensitive' } },
          ],
        } : undefined,
        include: {
          categories: true,
          _count: {
            select: {
              ingredients: true,
              instructions: true,
            },
          },
        },
      });
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findMany',
        data: {searchText},
      })
    }
  }

  async delete(id: string) {
    try {
      return await this.client.recipe.delete({
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
