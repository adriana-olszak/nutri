import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodCountAggregate } from './food-count-aggregate.output';
import { FoodMinAggregate } from './food-min-aggregate.output';
import { FoodMaxAggregate } from './food-max-aggregate.output';

@ObjectType()
export class FoodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    scientificName?: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FoodCountAggregate, {nullable:true})
    _count?: FoodCountAggregate;

    @Field(() => FoodMinAggregate, {nullable:true})
    _min?: FoodMinAggregate;

    @Field(() => FoodMaxAggregate, {nullable:true})
    _max?: FoodMaxAggregate;
}
