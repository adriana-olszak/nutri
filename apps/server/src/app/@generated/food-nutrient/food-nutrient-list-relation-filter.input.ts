import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';

@InputType()
export class FoodNutrientListRelationFilter {

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    every?: FoodNutrientWhereInput;

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    some?: FoodNutrientWhereInput;

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    none?: FoodNutrientWhereInput;
}
