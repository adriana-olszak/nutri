import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SectionOrderByWithRelationInput } from '../section/section-order-by-with-relation.input';
import { AnswerOrderByRelationAggregateInput } from '../answer/answer-order-by-relation-aggregate.input';

@InputType()
export class QuestionOrderByWithRelationInput {

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

    @Field(() => SectionOrderByWithRelationInput, {nullable:true})
    section?: SectionOrderByWithRelationInput;

    @Field(() => AnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: AnswerOrderByRelationAggregateInput;
}
