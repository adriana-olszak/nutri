import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandedFoodCountAggregate } from './branded-food-count-aggregate.output';
import { BrandedFoodAvgAggregate } from './branded-food-avg-aggregate.output';
import { BrandedFoodSumAggregate } from './branded-food-sum-aggregate.output';
import { BrandedFoodMinAggregate } from './branded-food-min-aggregate.output';
import { BrandedFoodMaxAggregate } from './branded-food-max-aggregate.output';

@ObjectType()
export class AggregateBrandedFood {

    @Field(() => BrandedFoodCountAggregate, {nullable:true})
    _count?: BrandedFoodCountAggregate;

    @Field(() => BrandedFoodAvgAggregate, {nullable:true})
    _avg?: BrandedFoodAvgAggregate;

    @Field(() => BrandedFoodSumAggregate, {nullable:true})
    _sum?: BrandedFoodSumAggregate;

    @Field(() => BrandedFoodMinAggregate, {nullable:true})
    _min?: BrandedFoodMinAggregate;

    @Field(() => BrandedFoodMaxAggregate, {nullable:true})
    _max?: BrandedFoodMaxAggregate;
}
