import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionnaireOrderByWithRelationInput } from '../questionnaire/questionnaire-order-by-with-relation.input';
import { SectionOrderByRelationAggregateInput } from '../section/section-order-by-relation-aggregate.input';
import { SubmissionOrderByRelationAggregateInput } from '../submission/submission-order-by-relation-aggregate.input';

@InputType()
export class QuestionnaireVersionOrderByWithRelationInput {

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

    @Field(() => QuestionnaireOrderByWithRelationInput, {nullable:true})
    questionnaire?: QuestionnaireOrderByWithRelationInput;

    @Field(() => SectionOrderByRelationAggregateInput, {nullable:true})
    sections?: SectionOrderByRelationAggregateInput;

    @Field(() => SubmissionOrderByRelationAggregateInput, {nullable:true})
    submissions?: SubmissionOrderByRelationAggregateInput;
}
