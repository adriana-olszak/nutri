import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutRecipeIngredientInput } from './food-create-without-recipe-ingredient.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutRecipeIngredientInput } from './food-create-or-connect-without-recipe-ingredient.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutRecipeIngredientInput {

    @Field(() => FoodCreateWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodCreateWithoutRecipeIngredientInput)
    create?: FoodCreateWithoutRecipeIngredientInput;

    @Field(() => FoodCreateOrConnectWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutRecipeIngredientInput)
    connectOrCreate?: FoodCreateOrConnectWithoutRecipeIngredientInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
