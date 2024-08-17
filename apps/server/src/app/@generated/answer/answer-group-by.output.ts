import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AnswerCountAggregate } from './answer-count-aggregate.output';
import { AnswerMinAggregate } from './answer-min-aggregate.output';
import { AnswerMaxAggregate } from './answer-max-aggregate.output';

@ObjectType()
export class AnswerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    submissionId!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => AnswerCountAggregate, {nullable:true})
    _count?: AnswerCountAggregate;

    @Field(() => AnswerMinAggregate, {nullable:true})
    _min?: AnswerMinAggregate;

    @Field(() => AnswerMaxAggregate, {nullable:true})
    _max?: AnswerMaxAggregate;
}
