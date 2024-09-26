import { Injectable } from '@nestjs/common';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions
} from 'prisma-pagination';
import { Prisma, PrismaService } from '@nutri/server-db-client';
import { Recipe } from '../../graphql/models/recipe.model';
import { RecipeCreateInput } from '../../graphql/inputs/recipe-create.input';
import { RecipeUpdateInput } from '../../graphql/inputs/recipe-update.input';
import { recipePropertyMetadata } from '../../graphql/filters/recipes/recipe-filter-metadata';
import { buildWhereClause } from '../../graphql/filters/common/build-where-clause';

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
    const where = buildWhereClause(filterInput, recipePropertyMetadata);
    const paginate = createPaginator(options);
    return paginate<Recipe, Prisma.RecipeFindManyArgs>(
      this.prisma.recipe,
      { orderBy: sortInput, where }
    );
  }

  create(createRecipeInput: RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data: {
        title: createRecipeInput.title,
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
