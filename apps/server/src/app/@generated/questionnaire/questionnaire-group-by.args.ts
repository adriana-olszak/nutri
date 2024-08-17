import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './questionnaire-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireOrderByWithAggregationInput } from './questionnaire-order-by-with-aggregation.input';
import { QuestionnaireScalarFieldEnum } from './questionnaire-scalar-field.enum';
import { QuestionnaireScalarWhereWithAggregatesInput } from './questionnaire-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuestionnaireCountAggregateInput } from './questionnaire-count-aggregate.input';
import { QuestionnaireMinAggregateInput } from './questionnaire-min-aggregate.input';
import { QuestionnaireMaxAggregateInput } from './questionnaire-max-aggregate.input';

@ArgsType()
export class QuestionnaireGroupByArgs {

    @Field(() => QuestionnaireWhereInput, {nullable:true})
    @Type(() => QuestionnaireWhereInput)
    where?: QuestionnaireWhereInput;

    @Field(() => [QuestionnaireOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuestionnaireOrderByWithAggregationInput>;

    @Field(() => [QuestionnaireScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuestionnaireScalarFieldEnum>;

    @Field(() => QuestionnaireScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuestionnaireScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuestionnaireCountAggregateInput, {nullable:true})
    _count?: QuestionnaireCountAggregateInput;

    @Field(() => QuestionnaireMinAggregateInput, {nullable:true})
    _min?: QuestionnaireMinAggregateInput;

    @Field(() => QuestionnaireMaxAggregateInput, {nullable:true})
    _max?: QuestionnaireMaxAggregateInput;
}
