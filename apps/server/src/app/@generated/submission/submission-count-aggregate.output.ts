import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubmissionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    questionnaireId!: number;

    @Field(() => Int, {nullable:false})
    questionnaireVersionId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    isComplete!: number;

    @Field(() => Int, {nullable:false})
    startedAt!: number;

    @Field(() => Int, {nullable:false})
    completedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
