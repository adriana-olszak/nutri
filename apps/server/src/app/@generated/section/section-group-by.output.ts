import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SectionCountAggregate } from './section-count-aggregate.output';
import { SectionAvgAggregate } from './section-avg-aggregate.output';
import { SectionSumAggregate } from './section-sum-aggregate.output';
import { SectionMinAggregate } from './section-min-aggregate.output';
import { SectionMaxAggregate } from './section-max-aggregate.output';

@ObjectType()
export class SectionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => SectionCountAggregate, {nullable:true})
    _count?: SectionCountAggregate;

    @Field(() => SectionAvgAggregate, {nullable:true})
    _avg?: SectionAvgAggregate;

    @Field(() => SectionSumAggregate, {nullable:true})
    _sum?: SectionSumAggregate;

    @Field(() => SectionMinAggregate, {nullable:true})
    _min?: SectionMinAggregate;

    @Field(() => SectionMaxAggregate, {nullable:true})
    _max?: SectionMaxAggregate;
}
