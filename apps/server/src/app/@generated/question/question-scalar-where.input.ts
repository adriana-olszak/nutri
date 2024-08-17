import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class QuestionScalarWhereInput {

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    AND?: Array<QuestionScalarWhereInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    OR?: Array<QuestionScalarWhereInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    NOT?: Array<QuestionScalarWhereInput>;

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
}
