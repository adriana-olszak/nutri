import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { QuestionCountAggregate } from './question-count-aggregate.output';
import { QuestionAvgAggregate } from './question-avg-aggregate.output';
import { QuestionSumAggregate } from './question-sum-aggregate.output';
import { QuestionMinAggregate } from './question-min-aggregate.output';
import { QuestionMaxAggregate } from './question-max-aggregate.output';

@ObjectType()
export class QuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sectionId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isRequired!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => QuestionCountAggregate, {nullable:true})
    _count?: QuestionCountAggregate;

    @Field(() => QuestionAvgAggregate, {nullable:true})
    _avg?: QuestionAvgAggregate;

    @Field(() => QuestionSumAggregate, {nullable:true})
    _sum?: QuestionSumAggregate;

    @Field(() => QuestionMinAggregate, {nullable:true})
    _min?: QuestionMinAggregate;

    @Field(() => QuestionMaxAggregate, {nullable:true})
    _max?: QuestionMaxAggregate;
}
