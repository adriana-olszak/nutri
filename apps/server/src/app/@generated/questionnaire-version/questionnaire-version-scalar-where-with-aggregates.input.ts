import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class QuestionnaireVersionScalarWhereWithAggregatesInput {

    @Field(() => [QuestionnaireVersionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuestionnaireVersionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionnaireVersionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuestionnaireVersionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionnaireVersionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuestionnaireVersionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionnaireId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    versionNumber?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
