import { Field, InputType, Int } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';

import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeInstructionsCreateWithoutRecipeInput } from './recipe-instructions-create-without-recipe.input';
import { RecipePartCreateWithoutRecipeInput } from './recipe-part-create-without-recipe.input';
import { TagCreateWithoutRecipesInput } from './tag-create-without-recipes.input';

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

  @Field(() => [TagCreateWithoutRecipesInput], { nullable: true })
  @Type(() => TagCreateWithoutRecipesInput)
  tags?: TagCreateWithoutRecipesInput[]
}
