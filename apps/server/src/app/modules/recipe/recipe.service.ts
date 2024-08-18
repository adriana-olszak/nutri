import { Injectable } from '@nestjs/common';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions
} from 'prisma-pagination';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { RecipeCreateInput } from '../../@generated/recipe/recipe-create.input';
import { RecipeUpdateInput } from '../../@generated/recipe/recipe-update.input';
import { Recipe } from '../../@generated/recipe/recipe.model';

@Injectable()
export class RecipeService {
  constructor(
    private readonly prisma: PrismaService
  ) {
  }

  findOne(id: string): Promise<Recipe> {
    return this.prisma.recipe.findUnique({ where: { id } });
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10
    },
    sortInput?: Prisma.RecipeOrderByWithRelationInput,
    filterInput?: Prisma.RecipeWhereInput
  ): Promise<PaginatedResult<Recipe>> {
    const paginate = createPaginator(options);
    return paginate<Recipe, Prisma.RecipeFindManyArgs>(
      this.prisma.recipe,
      { orderBy: sortInput, where: filterInput }
    );
  }

  create(createRecipeInput: RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data: {
        title: createRecipeInput.title,
        images: createRecipeInput.images,
        description: createRecipeInput.description
      }
    });
  }

  update(
    id: string,
    updateRecipeInput: RecipeUpdateInput
  ): Promise<Recipe> {
    return this.prisma.recipe.update({
      where: { id },
      data: {
        title: updateRecipeInput.title,
        images: updateRecipeInput.images,
        description: updateRecipeInput.description
      }
    });
  }

  remove(id: string): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where: { id }
    });
  }
}
