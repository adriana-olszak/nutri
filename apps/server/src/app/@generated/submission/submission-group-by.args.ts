import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubmissionWhereInput } from './submission-where.input';
import { Type } from 'class-transformer';
import { SubmissionOrderByWithAggregationInput } from './submission-order-by-with-aggregation.input';
import { SubmissionScalarFieldEnum } from './submission-scalar-field.enum';
import { SubmissionScalarWhereWithAggregatesInput } from './submission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubmissionCountAggregateInput } from './submission-count-aggregate.input';
import { SubmissionMinAggregateInput } from './submission-min-aggregate.input';
import { SubmissionMaxAggregateInput } from './submission-max-aggregate.input';

@ArgsType()
export class SubmissionGroupByArgs {

    @Field(() => SubmissionWhereInput, {nullable:true})
    @Type(() => SubmissionWhereInput)
    where?: SubmissionWhereInput;

    @Field(() => [SubmissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubmissionOrderByWithAggregationInput>;

    @Field(() => [SubmissionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubmissionScalarFieldEnum>;

    @Field(() => SubmissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubmissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubmissionCountAggregateInput, {nullable:true})
    _count?: SubmissionCountAggregateInput;

    @Field(() => SubmissionMinAggregateInput, {nullable:true})
    _min?: SubmissionMinAggregateInput;

    @Field(() => SubmissionMaxAggregateInput, {nullable:true})
    _max?: SubmissionMaxAggregateInput;
}
