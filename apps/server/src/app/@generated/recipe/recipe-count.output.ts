import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCount {

    @Field(() => Int, {nullable:false})
    instructions?: number;

    @Field(() => Int, {nullable:false})
    parts?: number;

    @Field(() => Int, {nullable:false})
    ingredients?: number;

    @Field(() => Int, {nullable:false})
    categories?: number;

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    seasons?: number;

    @Field(() => Int, {nullable:false})
    tags?: number;
}
