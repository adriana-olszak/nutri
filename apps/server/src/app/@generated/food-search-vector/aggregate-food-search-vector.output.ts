import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodSearchVectorCountAggregate } from './food-search-vector-count-aggregate.output';
import { FoodSearchVectorMinAggregate } from './food-search-vector-min-aggregate.output';
import { FoodSearchVectorMaxAggregate } from './food-search-vector-max-aggregate.output';

@ObjectType()
export class AggregateFoodSearchVector {

    @Field(() => FoodSearchVectorCountAggregate, {nullable:true})
    _count?: FoodSearchVectorCountAggregate;

    @Field(() => FoodSearchVectorMinAggregate, {nullable:true})
    _min?: FoodSearchVectorMinAggregate;

    @Field(() => FoodSearchVectorMaxAggregate, {nullable:true})
    _max?: FoodSearchVectorMaxAggregate;
}
