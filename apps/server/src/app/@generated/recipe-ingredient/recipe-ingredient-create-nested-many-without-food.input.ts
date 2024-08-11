import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutFoodInput } from './recipe-ingredient-create-without-food.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutFoodInput } from './recipe-ingredient-create-or-connect-without-food.input';
import { RecipeIngredientCreateManyFoodInputEnvelope } from './recipe-ingredient-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientCreateNestedManyWithoutFoodInput {

    @Field(() => [RecipeIngredientCreateWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutFoodInput)
    create?: Array<RecipeIngredientCreateWithoutFoodInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutFoodInput>;

    @Field(() => RecipeIngredientCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => RecipeIngredientCreateManyFoodInputEnvelope)
    createMany?: RecipeIngredientCreateManyFoodInputEnvelope;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id'>>;
}
