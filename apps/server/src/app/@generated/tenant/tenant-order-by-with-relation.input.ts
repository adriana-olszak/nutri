import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuestionnaireOrderByRelationAggregateInput } from '../questionnaire/questionnaire-order-by-relation-aggregate.input';

@InputType()
export class TenantOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => QuestionnaireOrderByRelationAggregateInput, {nullable:true})
    questionnaires?: QuestionnaireOrderByRelationAggregateInput;
}
