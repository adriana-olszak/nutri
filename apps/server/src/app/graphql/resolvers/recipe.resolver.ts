import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateOneRecipeArgs } from '../../@generated/recipe/create-one-recipe.args';
import { FindManyRecipeArgs } from '../../@generated/recipe/find-many-recipe.args';
import { UpdateOneRecipeArgs } from '../../@generated/recipe/update-one-recipe.args';
import { PaginationArgs } from '../args/pagination.args';
import { RecipePaginatedModel } from '../models/recipe/recipe-paginated.model';
import { Recipe } from '../../@generated/recipe/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipeDataLoader } from '../data-loaders/recipe.data-loader';
import { RecipePart } from '../../@generated/recipe-part/recipe-part.model';
import { RecipeIngredient } from '../../@generated/recipe-ingredient/recipe-ingredient.model';
import { RecipeCategory } from '../../@generated/recipe-category/recipe-category.model';
import { RecipeImage } from '../../@generated/recipe-image/recipe-image.model';
import { Season } from '../../@generated/season/season.model';
import { Tag } from '../../@generated/tag/tag.model';


@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(
    private readonly recipesService: RecipeService,
    private readonly recipeDataLoader: RecipeDataLoader
  ) {
  }

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  async findAll(@Args({ nullable: true }) options?: FindManyRecipeArgs) {
    return this.recipesService.findAll(options);
  }

  @Query(() => RecipePaginatedModel, { name: 'paginatedRecipes' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.recipesService.paginatedFindAll(options);
  }

  @Mutation(() => Recipe)
  createRecipe(@Args() createRecipeInput: CreateOneRecipeArgs): Promise<Recipe> {
    return this.recipesService.create(createRecipeInput.data);
  }

  @Mutation(() => Recipe)
  updateRecipe(@Args() updateRecipeInput: UpdateOneRecipeArgs): Promise<Recipe> {
    return this.recipesService.update(updateRecipeInput.where.id, updateRecipeInput.data);
  }

  @Mutation(() => Recipe)
  removeRecipe(@Args('id', { type: () => String }) id: string): Promise<Recipe> {
    return this.recipesService.remove(id);
  }

  @ResolveField(() => [RecipePart])
  async parts(@Parent() recipe: Recipe): Promise<RecipePart[]> {
    const result = await this.recipeDataLoader.batchParts.load(recipe.id);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  @ResolveField(() => [RecipeIngredient])
  async ingredients(@Parent() recipe: Recipe): Promise<RecipeIngredient[]> {
    const results = await this.recipeDataLoader.batchIngredients.loadMany([recipe.id]);
    const errors = results.filter(result => result instanceof Error);
    if (errors.length > 0) {
      throw errors[0];
    }
    return results as RecipeIngredient[];
  }

  @ResolveField(() => [RecipeCategory])
  async categories(@Parent() recipe: Recipe): Promise<RecipeCategory[]> {
    const result = await this.recipeDataLoader.batchCategories.load(recipe.id);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  @ResolveField(() => [RecipeImage])
  async images(@Parent() recipe: Recipe): Promise<RecipeImage[]> {
    const result = await this.recipeDataLoader.batchImages.load(recipe.id);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  @ResolveField(() => [Season])
  async seasons(@Parent() recipe: Recipe): Promise<Season[]> {
    const result = await this.recipeDataLoader.batchSeasons.load(recipe.id);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  @ResolveField(() => [Tag])
  async tags(@Parent() recipe: Recipe): Promise<Tag[]> {
    const result = await this.recipeDataLoader.batchTags.load(recipe.id);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }
}
