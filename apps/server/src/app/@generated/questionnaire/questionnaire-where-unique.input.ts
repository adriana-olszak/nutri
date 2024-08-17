import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TenantNullableRelationFilter } from '../tenant/tenant-nullable-relation-filter.input';
import { QuestionnaireVersionListRelationFilter } from '../questionnaire-version/questionnaire-version-list-relation-filter.input';
import { SubmissionListRelationFilter } from '../submission/submission-list-relation-filter.input';

@InputType()
export class QuestionnaireWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    AND?: Array<QuestionnaireWhereInput>;

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    OR?: Array<QuestionnaireWhereInput>;

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    NOT?: Array<QuestionnaireWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TenantNullableRelationFilter, {nullable:true})
    tenant?: TenantNullableRelationFilter;

    @Field(() => QuestionnaireVersionListRelationFilter, {nullable:true})
    versions?: QuestionnaireVersionListRelationFilter;

    @Field(() => SubmissionListRelationFilter, {nullable:true})
    submissions?: SubmissionListRelationFilter;
}
