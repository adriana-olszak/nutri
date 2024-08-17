import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubmissionCountOrderByAggregateInput } from './submission-count-order-by-aggregate.input';
import { SubmissionMaxOrderByAggregateInput } from './submission-max-order-by-aggregate.input';
import { SubmissionMinOrderByAggregateInput } from './submission-min-order-by-aggregate.input';

@InputType()
export class SubmissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionnaireId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionnaireVersionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isComplete?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SubmissionCountOrderByAggregateInput, {nullable:true})
    _count?: SubmissionCountOrderByAggregateInput;

    @Field(() => SubmissionMaxOrderByAggregateInput, {nullable:true})
    _max?: SubmissionMaxOrderByAggregateInput;

    @Field(() => SubmissionMinOrderByAggregateInput, {nullable:true})
    _min?: SubmissionMinOrderByAggregateInput;
}
