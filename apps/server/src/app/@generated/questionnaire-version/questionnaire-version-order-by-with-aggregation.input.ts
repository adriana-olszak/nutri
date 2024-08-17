import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionnaireVersionCountOrderByAggregateInput } from './questionnaire-version-count-order-by-aggregate.input';
import { QuestionnaireVersionAvgOrderByAggregateInput } from './questionnaire-version-avg-order-by-aggregate.input';
import { QuestionnaireVersionMaxOrderByAggregateInput } from './questionnaire-version-max-order-by-aggregate.input';
import { QuestionnaireVersionMinOrderByAggregateInput } from './questionnaire-version-min-order-by-aggregate.input';
import { QuestionnaireVersionSumOrderByAggregateInput } from './questionnaire-version-sum-order-by-aggregate.input';

@InputType()
export class QuestionnaireVersionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionnaireId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    versionNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => QuestionnaireVersionCountOrderByAggregateInput, {nullable:true})
    _count?: QuestionnaireVersionCountOrderByAggregateInput;

    @Field(() => QuestionnaireVersionAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuestionnaireVersionAvgOrderByAggregateInput;

    @Field(() => QuestionnaireVersionMaxOrderByAggregateInput, {nullable:true})
    _max?: QuestionnaireVersionMaxOrderByAggregateInput;

    @Field(() => QuestionnaireVersionMinOrderByAggregateInput, {nullable:true})
    _min?: QuestionnaireVersionMinOrderByAggregateInput;

    @Field(() => QuestionnaireVersionSumOrderByAggregateInput, {nullable:true})
    _sum?: QuestionnaireVersionSumOrderByAggregateInput;
}
