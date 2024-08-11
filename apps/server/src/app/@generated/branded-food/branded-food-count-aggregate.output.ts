import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BrandedFoodCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    foodId!: number;

    @Field(() => Int, {nullable:false})
    brandOwner!: number;

    @Field(() => Int, {nullable:false})
    gtinUpc!: number;

    @Field(() => Int, {nullable:false})
    ingredients!: number;

    @Field(() => Int, {nullable:false})
    servingSize!: number;

    @Field(() => Int, {nullable:false})
    servingUnit!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    importInfoId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
