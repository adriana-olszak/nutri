import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class QuestionnaireWhereInput {

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    AND?: Array<QuestionnaireWhereInput>;

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    OR?: Array<QuestionnaireWhereInput>;

    @Field(() => [QuestionnaireWhereInput], {nullable:true})
    NOT?: Array<QuestionnaireWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
