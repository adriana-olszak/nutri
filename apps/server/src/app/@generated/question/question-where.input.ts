import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';

@InputType()
export class QuestionWhereInput {

    @Field(() => [QuestionWhereInput], {nullable:true})
    AND?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    OR?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    NOT?: Array<QuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sectionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRequired?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    config?: JsonFilter;

    @Field(() => SectionRelationFilter, {nullable:true})
    section?: SectionRelationFilter;

    @Field(() => AnswerListRelationFilter, {nullable:true})
    answers?: AnswerListRelationFilter;
}
