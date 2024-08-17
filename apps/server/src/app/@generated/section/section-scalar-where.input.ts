import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class SectionScalarWhereInput {

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    AND?: Array<SectionScalarWhereInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    OR?: Array<SectionScalarWhereInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    NOT?: Array<SectionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionnaireVersionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
