import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutrientCountAggregate } from './nutrient-count-aggregate.output';
import { NutrientMinAggregate } from './nutrient-min-aggregate.output';
import { NutrientMaxAggregate } from './nutrient-max-aggregate.output';

@ObjectType()
export class NutrientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    importInfoId!: string;

    @Field(() => NutrientCountAggregate, {nullable:true})
    _count?: NutrientCountAggregate;

    @Field(() => NutrientMinAggregate, {nullable:true})
    _min?: NutrientMinAggregate;

    @Field(() => NutrientMaxAggregate, {nullable:true})
    _max?: NutrientMaxAggregate;
}
