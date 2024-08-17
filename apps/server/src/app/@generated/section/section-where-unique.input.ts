import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { QuestionnaireVersionRelationFilter } from '../questionnaire-version/questionnaire-version-relation-filter.input';
import { QuestionListRelationFilter } from '../question/question-list-relation-filter.input';

@InputType()
export class SectionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SectionWhereInput], {nullable:true})
    AND?: Array<SectionWhereInput>;

    @Field(() => [SectionWhereInput], {nullable:true})
    OR?: Array<SectionWhereInput>;

    @Field(() => [SectionWhereInput], {nullable:true})
    NOT?: Array<SectionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    questionnaireVersionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => QuestionnaireVersionRelationFilter, {nullable:true})
    questionnaireVersion?: QuestionnaireVersionRelationFilter;

    @Field(() => QuestionListRelationFilter, {nullable:true})
    questions?: QuestionListRelationFilter;
}
