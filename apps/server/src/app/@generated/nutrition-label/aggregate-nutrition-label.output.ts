import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutritionLabelCountAggregate } from './nutrition-label-count-aggregate.output';
import { NutritionLabelAvgAggregate } from './nutrition-label-avg-aggregate.output';
import { NutritionLabelSumAggregate } from './nutrition-label-sum-aggregate.output';
import { NutritionLabelMinAggregate } from './nutrition-label-min-aggregate.output';
import { NutritionLabelMaxAggregate } from './nutrition-label-max-aggregate.output';

@ObjectType()
export class AggregateNutritionLabel {

    @Field(() => NutritionLabelCountAggregate, {nullable:true})
    _count?: NutritionLabelCountAggregate;

    @Field(() => NutritionLabelAvgAggregate, {nullable:true})
    _avg?: NutritionLabelAvgAggregate;

    @Field(() => NutritionLabelSumAggregate, {nullable:true})
    _sum?: NutritionLabelSumAggregate;

    @Field(() => NutritionLabelMinAggregate, {nullable:true})
    _min?: NutritionLabelMinAggregate;

    @Field(() => NutritionLabelMaxAggregate, {nullable:true})
    _max?: NutritionLabelMaxAggregate;
}
