import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutRecipeIngredientInput } from './food-create-without-recipe-ingredient.input';

@InputType()
export class FoodCreateOrConnectWithoutRecipeIngredientInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => FoodCreateWithoutRecipeIngredientInput)
    create!: FoodCreateWithoutRecipeIngredientInput;
}
