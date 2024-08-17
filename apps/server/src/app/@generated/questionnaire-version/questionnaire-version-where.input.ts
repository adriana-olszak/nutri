import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { QuestionnaireRelationFilter } from '../questionnaire/questionnaire-relation-filter.input';
import { SectionListRelationFilter } from '../section/section-list-relation-filter.input';
import { SubmissionListRelationFilter } from '../submission/submission-list-relation-filter.input';

@InputType()
export class QuestionnaireVersionWhereInput {

    @Field(() => [QuestionnaireVersionWhereInput], {nullable:true})
    AND?: Array<QuestionnaireVersionWhereInput>;

    @Field(() => [QuestionnaireVersionWhereInput], {nullable:true})
    OR?: Array<QuestionnaireVersionWhereInput>;

    @Field(() => [QuestionnaireVersionWhereInput], {nullable:true})
    NOT?: Array<QuestionnaireVersionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionnaireId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    versionNumber?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => QuestionnaireRelationFilter, {nullable:true})
    questionnaire?: QuestionnaireRelationFilter;

    @Field(() => SectionListRelationFilter, {nullable:true})
    sections?: SectionListRelationFilter;

    @Field(() => SubmissionListRelationFilter, {nullable:true})
    submissions?: SubmissionListRelationFilter;
}
