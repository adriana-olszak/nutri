import {
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql';
import { PrismaService } from '@nutri/server-db-client';
import { CreateOneRecipeArgs } from '../../@generated/recipe/create-one-recipe.args';
import { FindManyRecipeArgs } from '../../@generated/recipe/find-many-recipe.args';
import { UpdateOneRecipeArgs } from '../../@generated/recipe/update-one-recipe.args';
import { PaginationArgs } from '../args/pagination.args';
import { RecipePaginatedModel } from '../models/recipe/recipe-paginated.model';
import { Recipe } from '../../@generated/recipe/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(
    private readonly recipesService: RecipeService,
    private readonly prismaService: PrismaService
  ) {
  }

  @Mutation(() => Recipe)
  createRecipe(
    @Args() createRecipeInput: CreateOneRecipeArgs
  ): Promise<Recipe> {
    return this.recipesService.create(createRecipeInput.data);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  async findAll(@Args({ nullable: true }) options?: FindManyRecipeArgs) {
    return this.recipesService.findAll(options);
  }

  @Query(() => RecipePaginatedModel, { name: 'paginatedRecipes' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.recipesService.paginatedFindAll(options);
  }

  @Query(() => Recipe, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }


  @Mutation(() => Recipe)
  updateRecipe(
    @Args() updateRecipeInput: UpdateOneRecipeArgs
  ): Promise<Recipe> {
    return this.recipesService.update(
      updateRecipeInput.where.id,
      updateRecipeInput.data
    );
  }

  @Mutation(() => Recipe)
  removeRecipe(
    @Args('id', { type: () => String }) id: string
  ): Promise<Recipe> {
    return this.recipesService.remove(id);
  }
}
