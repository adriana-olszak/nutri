import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';
import { QuestionnaireVersionOrderByRelationAggregateInput } from '../questionnaire-version/questionnaire-version-order-by-relation-aggregate.input';
import { SubmissionOrderByRelationAggregateInput } from '../submission/submission-order-by-relation-aggregate.input';

@InputType()
export class QuestionnaireOrderByWithRelationInput {

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

    @Field(() => TenantOrderByWithRelationInput, {nullable:true})
    tenant?: TenantOrderByWithRelationInput;

    @Field(() => QuestionnaireVersionOrderByRelationAggregateInput, {nullable:true})
    versions?: QuestionnaireVersionOrderByRelationAggregateInput;

    @Field(() => SubmissionOrderByRelationAggregateInput, {nullable:true})
    submissions?: SubmissionOrderByRelationAggregateInput;
}
