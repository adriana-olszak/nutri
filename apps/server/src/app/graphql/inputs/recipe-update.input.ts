import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';

import { RecipePartCreateWithoutRecipeInput } from './recipe-part-create-without-recipe.input';
import { RecipeInstructionsCreateWithoutRecipeInput } from './recipe-instructions-create-without-recipe.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeCategoryWhereUniqueInput } from './recipe-category-where-unique.input';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';
import { SeasonWhereUniqueInput } from './season-where-unique.input';

@InputType()
export class RecipeUpdateInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  sourceUrl?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  cookingTime?: string;

  @Field(() => String, { nullable: true })
  prepTime?: string;

  @Field(() => String, { nullable: true })
  servingsText?: string;

  @Field(() => Int, { nullable: true })
  servingsMin?: number;

  @Field(() => Int, { nullable: true })
  servingsMax?: number;

  @Field(() => [RecipeInstructionsCreateWithoutRecipeInput], { nullable: true })
  instructions?: RecipeInstructionsCreateWithoutRecipeInput[];

  @Field(() => RecipePartCreateWithoutRecipeInput, { nullable: true })
  parts?: RecipePartCreateWithoutRecipeInput;

  @Field(() => [RecipeIngredientWhereUniqueInput], { nullable: true })
  @Type(() => RecipeIngredientWhereUniqueInput)
  ingredients?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;

  // TODO it should just link with Category and not create a new one
  //   categories have to be changed. We need an ENUM list of categories. Drop the idea of levels.
  @Field(() => [RecipeCategoryWhereUniqueInput], { nullable: true })
  @Type(() => RecipeCategoryWhereUniqueInput)
  categories?: RecipeCategoryWhereUniqueInput[]

  // TODO it should be an ENUM list of seasons
  //  Store only the season names in the database
  @Field(() => [SeasonWhereUniqueInput], { nullable: true })
  @Type(() => SeasonWhereUniqueInput)
  seasons?: SeasonWhereUniqueInput[];

  @Field(() => [TagCreateWithoutRecipesInput], { nullable: true })
  @Type(() => TagCreateWithoutRecipesInput)
  tags?: TagCreateWithoutRecipesInput[]
}

