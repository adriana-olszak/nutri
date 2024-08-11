import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionWhereInput } from './food-portion-where.input';

@InputType()
export class FoodPortionListRelationFilter {

    @Field(() => FoodPortionWhereInput, {nullable:true})
    every?: FoodPortionWhereInput;

    @Field(() => FoodPortionWhereInput, {nullable:true})
    some?: FoodPortionWhereInput;

    @Field(() => FoodPortionWhereInput, {nullable:true})
    none?: FoodPortionWhereInput;
}
