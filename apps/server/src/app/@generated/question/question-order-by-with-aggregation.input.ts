import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { QuestionCountOrderByAggregateInput } from './question-count-order-by-aggregate.input';
import { QuestionAvgOrderByAggregateInput } from './question-avg-order-by-aggregate.input';
import { QuestionMaxOrderByAggregateInput } from './question-max-order-by-aggregate.input';
import { QuestionMinOrderByAggregateInput } from './question-min-order-by-aggregate.input';
import { QuestionSumOrderByAggregateInput } from './question-sum-order-by-aggregate.input';

@InputType()
export class QuestionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isRequired?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => QuestionCountOrderByAggregateInput, {nullable:true})
    _count?: QuestionCountOrderByAggregateInput;

    @Field(() => QuestionAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuestionAvgOrderByAggregateInput;

    @Field(() => QuestionMaxOrderByAggregateInput, {nullable:true})
    _max?: QuestionMaxOrderByAggregateInput;

    @Field(() => QuestionMinOrderByAggregateInput, {nullable:true})
    _min?: QuestionMinOrderByAggregateInput;

    @Field(() => QuestionSumOrderByAggregateInput, {nullable:true})
    _sum?: QuestionSumOrderByAggregateInput;
}
