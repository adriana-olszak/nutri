import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionOrderByWithAggregationInput } from './questionnaire-version-order-by-with-aggregation.input';
import { QuestionnaireVersionScalarFieldEnum } from './questionnaire-version-scalar-field.enum';
import { QuestionnaireVersionScalarWhereWithAggregatesInput } from './questionnaire-version-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersionCountAggregateInput } from './questionnaire-version-count-aggregate.input';
import { QuestionnaireVersionAvgAggregateInput } from './questionnaire-version-avg-aggregate.input';
import { QuestionnaireVersionSumAggregateInput } from './questionnaire-version-sum-aggregate.input';
import { QuestionnaireVersionMinAggregateInput } from './questionnaire-version-min-aggregate.input';
import { QuestionnaireVersionMaxAggregateInput } from './questionnaire-version-max-aggregate.input';

@ArgsType()
export class QuestionnaireVersionGroupByArgs {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;

    @Field(() => [QuestionnaireVersionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuestionnaireVersionOrderByWithAggregationInput>;

    @Field(() => [QuestionnaireVersionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuestionnaireVersionScalarFieldEnum>;

    @Field(() => QuestionnaireVersionScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuestionnaireVersionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuestionnaireVersionCountAggregateInput, {nullable:true})
    _count?: QuestionnaireVersionCountAggregateInput;

    @Field(() => QuestionnaireVersionAvgAggregateInput, {nullable:true})
    _avg?: QuestionnaireVersionAvgAggregateInput;

    @Field(() => QuestionnaireVersionSumAggregateInput, {nullable:true})
    _sum?: QuestionnaireVersionSumAggregateInput;

    @Field(() => QuestionnaireVersionMinAggregateInput, {nullable:true})
    _min?: QuestionnaireVersionMinAggregateInput;

    @Field(() => QuestionnaireVersionMaxAggregateInput, {nullable:true})
    _max?: QuestionnaireVersionMaxAggregateInput;
}
