import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { QuestionnaireVersionOrderByWithRelationInput } from '../questionnaire-version/questionnaire-version-order-by-with-relation.input';
import { QuestionOrderByRelationAggregateInput } from '../question/question-order-by-relation-aggregate.input';

@InputType()
export class SectionOrderByWithRelationInput {

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

    @Field(() => QuestionnaireVersionOrderByWithRelationInput, {nullable:true})
    questionnaireVersion?: QuestionnaireVersionOrderByWithRelationInput;

    @Field(() => QuestionOrderByRelationAggregateInput, {nullable:true})
    questions?: QuestionOrderByRelationAggregateInput;
}
