import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TranslationCountOrderByAggregateInput } from './translation-count-order-by-aggregate.input';
import { TranslationMaxOrderByAggregateInput } from './translation-max-order-by-aggregate.input';
import { TranslationMinOrderByAggregateInput } from './translation-min-order-by-aggregate.input';

@InputType()
export class TranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => TranslationCountOrderByAggregateInput, {nullable:true})
    _count?: TranslationCountOrderByAggregateInput;

    @Field(() => TranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: TranslationMaxOrderByAggregateInput;

    @Field(() => TranslationMinOrderByAggregateInput, {nullable:true})
    _min?: TranslationMinOrderByAggregateInput;
}
