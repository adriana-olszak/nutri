import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';

@InputType()
export class FoodSearchVectorListRelationFilter {

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    every?: FoodSearchVectorWhereInput;

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    some?: FoodSearchVectorWhereInput;

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    none?: FoodSearchVectorWhereInput;
}
