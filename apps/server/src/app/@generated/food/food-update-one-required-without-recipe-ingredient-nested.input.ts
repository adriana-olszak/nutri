import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutRecipeIngredientInput } from './food-create-without-recipe-ingredient.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutRecipeIngredientInput } from './food-create-or-connect-without-recipe-ingredient.input';
import { FoodUpsertWithoutRecipeIngredientInput } from './food-upsert-without-recipe-ingredient.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutRecipeIngredientInput } from './food-update-to-one-with-where-without-recipe-ingredient.input';

@InputType()
export class FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput {

    @Field(() => FoodCreateWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodCreateWithoutRecipeIngredientInput)
    create?: FoodCreateWithoutRecipeIngredientInput;

    @Field(() => FoodCreateOrConnectWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutRecipeIngredientInput)
    connectOrCreate?: FoodCreateOrConnectWithoutRecipeIngredientInput;

    @Field(() => FoodUpsertWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodUpsertWithoutRecipeIngredientInput)
    upsert?: FoodUpsertWithoutRecipeIngredientInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutRecipeIngredientInput)
    update?: FoodUpdateToOneWithWhereWithoutRecipeIngredientInput;
}
