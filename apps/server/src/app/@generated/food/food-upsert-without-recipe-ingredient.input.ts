import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodUpdateWithoutRecipeIngredientInput } from './food-update-without-recipe-ingredient.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutRecipeIngredientInput } from './food-create-without-recipe-ingredient.input';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodUpsertWithoutRecipeIngredientInput {

    @Field(() => FoodUpdateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => FoodUpdateWithoutRecipeIngredientInput)
    update!: FoodUpdateWithoutRecipeIngredientInput;

    @Field(() => FoodCreateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => FoodCreateWithoutRecipeIngredientInput)
    create!: FoodCreateWithoutRecipeIngredientInput;

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;
}
