import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@nutri/server-db-client';
import { Type } from 'class-transformer';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipePartCreateWithoutRecipeInput {

  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [RecipeIngredientWhereUniqueInput], { nullable: true })
  @Type(() => RecipeIngredientWhereUniqueInput)
  ingredients?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;
}
