import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutrientCountAggregate } from './nutrient-count-aggregate.output';
import { NutrientMinAggregate } from './nutrient-min-aggregate.output';
import { NutrientMaxAggregate } from './nutrient-max-aggregate.output';

@ObjectType()
export class AggregateNutrient {

    @Field(() => NutrientCountAggregate, {nullable:true})
    _count?: NutrientCountAggregate;

    @Field(() => NutrientMinAggregate, {nullable:true})
    _min?: NutrientMinAggregate;

    @Field(() => NutrientMaxAggregate, {nullable:true})
    _max?: NutrientMaxAggregate;
}
