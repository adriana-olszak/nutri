import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    sourceUrl!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    cookingTime!: number;

    @Field(() => Int, {nullable:false})
    prepTime!: number;

    @Field(() => Int, {nullable:false})
    servingsText!: number;

    @Field(() => Int, {nullable:false})
    servingsMin!: number;

    @Field(() => Int, {nullable:false})
    servingsMax!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
