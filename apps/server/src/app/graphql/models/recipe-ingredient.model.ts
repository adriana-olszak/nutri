import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Food } from './food.model';

@ObjectType()
export class RecipeIngredient {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  recipeId!: string;

  @Field(() => String, { nullable: true })
  partId!: string | null;

  @Field(() => String, { nullable: false })
  foodId!: string;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => String, { nullable: true })
  quantityText!: string | null;

  @Field(() => Float, { nullable: true })
  minQuantity!: number | null;

  @Field(() => Float, { nullable: true })
  maxQuantity!: number | null;

  @Field(() => String, { nullable: false })
  unit!: string;

  @Field(() => String, { nullable: true })
  unitText!: string | null;

  @Field(() => String, { nullable: true })
  ingredientText!: string | null;

  @Field(() => String, { nullable: true })
  extraInfo!: string | null;

  @Field(() => Food, { nullable: true })
  food?: Food;
}
