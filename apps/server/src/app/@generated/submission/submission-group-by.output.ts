import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubmissionCountAggregate } from './submission-count-aggregate.output';
import { SubmissionMinAggregate } from './submission-min-aggregate.output';
import { SubmissionMaxAggregate } from './submission-max-aggregate.output';

@ObjectType()
export class SubmissionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:false})
    isComplete!: boolean;

    @Field(() => Date, {nullable:false})
    startedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => SubmissionCountAggregate, {nullable:true})
    _count?: SubmissionCountAggregate;

    @Field(() => SubmissionMinAggregate, {nullable:true})
    _min?: SubmissionMinAggregate;

    @Field(() => SubmissionMaxAggregate, {nullable:true})
    _max?: SubmissionMaxAggregate;
}
