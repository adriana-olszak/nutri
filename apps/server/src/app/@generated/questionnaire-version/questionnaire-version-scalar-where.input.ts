import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class QuestionnaireVersionScalarWhereInput {

    @Field(() => [QuestionnaireVersionScalarWhereInput], {nullable:true})
    AND?: Array<QuestionnaireVersionScalarWhereInput>;

    @Field(() => [QuestionnaireVersionScalarWhereInput], {nullable:true})
    OR?: Array<QuestionnaireVersionScalarWhereInput>;

    @Field(() => [QuestionnaireVersionScalarWhereInput], {nullable:true})
    NOT?: Array<QuestionnaireVersionScalarWhereInput>;

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
}
