import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { QuestionnaireListRelationFilter } from '../questionnaire/questionnaire-list-relation-filter.input';

@InputType()
export class TenantWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TenantWhereInput], {nullable:true})
    AND?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    OR?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    NOT?: Array<TenantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => QuestionnaireListRelationFilter, {nullable:true})
    questionnaires?: QuestionnaireListRelationFilter;
}
