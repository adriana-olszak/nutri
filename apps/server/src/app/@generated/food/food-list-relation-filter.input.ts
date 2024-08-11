import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodWhereInput } from './food-where.input';

@InputType()
export class FoodListRelationFilter {

    @Field(() => FoodWhereInput, {nullable:true})
    every?: FoodWhereInput;

    @Field(() => FoodWhereInput, {nullable:true})
    some?: FoodWhereInput;

    @Field(() => FoodWhereInput, {nullable:true})
    none?: FoodWhereInput;
}
