import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodCountAggregate } from './food-count-aggregate.output';
import { FoodMinAggregate } from './food-min-aggregate.output';
import { FoodMaxAggregate } from './food-max-aggregate.output';

@ObjectType()
export class AggregateFood {

    @Field(() => FoodCountAggregate, {nullable:true})
    _count?: FoodCountAggregate;

    @Field(() => FoodMinAggregate, {nullable:true})
    _min?: FoodMinAggregate;

    @Field(() => FoodMaxAggregate, {nullable:true})
    _max?: FoodMaxAggregate;
}
