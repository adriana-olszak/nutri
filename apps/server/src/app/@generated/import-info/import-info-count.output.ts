import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImportInfoCount {

    @Field(() => Int, {nullable:false})
    foods?: number;

    @Field(() => Int, {nullable:false})
    foodCategories?: number;

    @Field(() => Int, {nullable:false})
    brandedFoods?: number;

    @Field(() => Int, {nullable:false})
    nutrients?: number;

    @Field(() => Int, {nullable:false})
    foodNutrients?: number;

    @Field(() => Int, {nullable:false})
    foodPortions?: number;

    @Field(() => Int, {nullable:false})
    measureUnits?: number;
}
