import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SubmissionCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;
}
