import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutFoodInput } from './recipe-ingredient-update-without-food.input';
import { RecipeIngredientCreateWithoutFoodInput } from './recipe-ingredient-create-without-food.input';

@InputType()
export class RecipeIngredientUpsertWithWhereUniqueWithoutFoodInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>;

    @Field(() => RecipeIngredientUpdateWithoutFoodInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutFoodInput)
    update!: RecipeIngredientUpdateWithoutFoodInput;

    @Field(() => RecipeIngredientCreateWithoutFoodInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutFoodInput)
    create!: RecipeIngredientCreateWithoutFoodInput;
}
