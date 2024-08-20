import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '../../../graphql/args/pagination.args';
import { RecipePaginatedModel } from '../../../graphql/models/recipe-paginated.model';
import { RecipeService } from '../recipe.service';
import { RecipeDataLoader } from '../recipe.data-loader';
import { Recipe } from '../../../graphql/models/recipe.model';
import { RecipeOrderByWithRelationInput } from '../../../graphql/inputs/recipe-order-by-with-relation.input';
import { RecipeWhereInput } from '../../../graphql/inputs/recipe-where.input';
import { CreateOneRecipeArgs } from '../../../graphql/args/create-one-recipe.args';
import { UpdateOneRecipeArgs } from '../../../graphql/args/update-one-recipe.args';
import { RecipePart } from '../../../graphql/models/recipe-part.model';
import { RecipeIngredient } from '../../../graphql/models/recipe-ingredient.model';
import { RecipeCategory } from '../../../graphql/models/recipe-category.model';
import { RecipeImage } from '../../../graphql/models/recipe-image.model';
import { Season } from '../../../graphql/models/season.model';
import { Tag } from '../../../graphql/models/tag.model';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(
    private readonly recipesService: RecipeService,
    private readonly recipeDataLoader: RecipeDataLoader
  ) {
  }

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id', { type: () => ID }) id: string): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }

  @Query(() => RecipePaginatedModel, { name: 'paginatedRecipes' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs,
                         @Args('sortInput', { nullable: true }) sortInput?: RecipeOrderByWithRelationInput,
                         @Args('filterInput', { nullable: true }) filterInput?: RecipeWhereInput
  ) {
    return this.recipesService.paginatedFindAll(
      options,
      sortInput,
      filterInput);
  }

  @Mutation(() => Recipe)
  createRecipe(@Args() createRecipeInput: CreateOneRecipeArgs): Promise<Recipe> {
    return this.recipesService.create(createRecipeInput.data);
  }

  @Mutation(() => Recipe)
  updateRecipe(@Args() updateRecipeInput: UpdateOneRecipeArgs): Promise<Recipe> {
    return this.recipesService.update(updateRecipeInput.id, updateRecipeInput.data);
  }

  @Mutation(() => Recipe)
  removeRecipe(@Args('id', { type: () => ID }) id: string): Promise<Recipe> {
    return this.recipesService.remove(id);
  }

  @ResolveField(() => [RecipePart])
  async parts(@Parent() recipe: Recipe): Promise<RecipePart[]> {
    return this.recipeDataLoader.batchParts.load(recipe.id);

  }

  @ResolveField(() => [RecipeIngredient])
  async ingredients(@Parent() recipe: Recipe): Promise<RecipeIngredient[]> {
    return this.recipeDataLoader.batchIngredients.load(recipe.id);
  }

  @ResolveField(() => [RecipeCategory])
  async categories(@Parent() recipe: Recipe): Promise<RecipeCategory[]> {
    return await this.recipeDataLoader.batchCategories.load(recipe.id);
  }

  @ResolveField(() => [RecipeImage])
  async images(@Parent() recipe: Recipe): Promise<RecipeImage[]> {
    return await this.recipeDataLoader.batchImages.load(recipe.id);

  }

  @ResolveField(() => [Season])
  async seasons(@Parent() recipe: Recipe): Promise<Season[]> {
    return await this.recipeDataLoader.batchSeasons.load(recipe.id);

  }

  @ResolveField(() => [Tag])
  async tags(@Parent() recipe: Recipe): Promise<Tag[]> {
    return await this.recipeDataLoader.batchTags.load(recipe.id);
  }
}
