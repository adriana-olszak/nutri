import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { QuestionnaireOrderByWithRelationInput } from '../questionnaire/questionnaire-order-by-with-relation.input';
import { QuestionnaireVersionOrderByWithRelationInput } from '../questionnaire-version/questionnaire-version-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { AnswerOrderByRelationAggregateInput } from '../answer/answer-order-by-relation-aggregate.input';

@InputType()
export class SubmissionOrderByWithRelationInput {

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

    @Field(() => QuestionnaireOrderByWithRelationInput, {nullable:true})
    questionnaire?: QuestionnaireOrderByWithRelationInput;

    @Field(() => QuestionnaireVersionOrderByWithRelationInput, {nullable:true})
    questionnaireVersion?: QuestionnaireVersionOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => AnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: AnswerOrderByRelationAggregateInput;
}
