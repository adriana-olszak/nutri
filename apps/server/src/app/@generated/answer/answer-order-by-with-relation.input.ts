import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubmissionOrderByWithRelationInput } from '../submission/submission-order-by-with-relation.input';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';

@InputType()
export class AnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    submissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SubmissionOrderByWithRelationInput, {nullable:true})
    submission?: SubmissionOrderByWithRelationInput;

    @Field(() => QuestionOrderByWithRelationInput, {nullable:true})
    question?: QuestionOrderByWithRelationInput;
}
