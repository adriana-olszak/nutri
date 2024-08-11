import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutRecipeIngredientInput } from './food-update-without-recipe-ingredient.input';

@InputType()
export class FoodUpdateToOneWithWhereWithoutRecipeIngredientInput {

    @Field(() => FoodWhereInput, {nullable:true})
    @Type(() => FoodWhereInput)
    where?: FoodWhereInput;

    @Field(() => FoodUpdateWithoutRecipeIngredientInput, {nullable:false})
    @Type(() => FoodUpdateWithoutRecipeIngredientInput)
    data!: FoodUpdateWithoutRecipeIngredientInput;
}
