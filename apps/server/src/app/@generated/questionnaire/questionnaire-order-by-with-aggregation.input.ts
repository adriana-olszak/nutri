import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { QuestionnaireCountOrderByAggregateInput } from './questionnaire-count-order-by-aggregate.input';
import { QuestionnaireMaxOrderByAggregateInput } from './questionnaire-max-order-by-aggregate.input';
import { QuestionnaireMinOrderByAggregateInput } from './questionnaire-min-order-by-aggregate.input';

@InputType()
export class QuestionnaireOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPublic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => QuestionnaireCountOrderByAggregateInput, {nullable:true})
    _count?: QuestionnaireCountOrderByAggregateInput;

    @Field(() => QuestionnaireMaxOrderByAggregateInput, {nullable:true})
    _max?: QuestionnaireMaxOrderByAggregateInput;

    @Field(() => QuestionnaireMinOrderByAggregateInput, {nullable:true})
    _min?: QuestionnaireMinOrderByAggregateInput;
}
