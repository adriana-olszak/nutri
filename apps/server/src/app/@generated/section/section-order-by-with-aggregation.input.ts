import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SectionCountOrderByAggregateInput } from './section-count-order-by-aggregate.input';
import { SectionAvgOrderByAggregateInput } from './section-avg-order-by-aggregate.input';
import { SectionMaxOrderByAggregateInput } from './section-max-order-by-aggregate.input';
import { SectionMinOrderByAggregateInput } from './section-min-order-by-aggregate.input';
import { SectionSumOrderByAggregateInput } from './section-sum-order-by-aggregate.input';

@InputType()
export class SectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionnaireVersionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SectionCountOrderByAggregateInput, {nullable:true})
    _count?: SectionCountOrderByAggregateInput;

    @Field(() => SectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: SectionAvgOrderByAggregateInput;

    @Field(() => SectionMaxOrderByAggregateInput, {nullable:true})
    _max?: SectionMaxOrderByAggregateInput;

    @Field(() => SectionMinOrderByAggregateInput, {nullable:true})
    _min?: SectionMinOrderByAggregateInput;

    @Field(() => SectionSumOrderByAggregateInput, {nullable:true})
    _sum?: SectionSumOrderByAggregateInput;
}
