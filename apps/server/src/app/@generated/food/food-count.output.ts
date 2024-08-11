import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCount {

    @Field(() => Int, {nullable:false})
    nutrients?: number;

    @Field(() => Int, {nullable:false})
    portions?: number;

    @Field(() => Int, {nullable:false})
    categories?: number;

    @Field(() => Int, {nullable:false})
    searchVectors?: number;

    @Field(() => Int, {nullable:false})
    RecipeIngredient?: number;
}
