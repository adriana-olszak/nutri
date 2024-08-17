import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionWhereInput } from './questionnaire-version-where.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionOrderByWithRelationInput } from './questionnaire-version-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionnaireVersionCountAggregateInput } from './questionnaire-version-count-aggregate.input';
import { QuestionnaireVersionAvgAggregateInput } from './questionnaire-version-avg-aggregate.input';
import { QuestionnaireVersionSumAggregateInput } from './questionnaire-version-sum-aggregate.input';
import { QuestionnaireVersionMinAggregateInput } from './questionnaire-version-min-aggregate.input';
import { QuestionnaireVersionMaxAggregateInput } from './questionnaire-version-max-aggregate.input';

@ArgsType()
export class QuestionnaireVersionAggregateArgs {

    @Field(() => QuestionnaireVersionWhereInput, {nullable:true})
    @Type(() => QuestionnaireVersionWhereInput)
    where?: QuestionnaireVersionWhereInput;

    @Field(() => [QuestionnaireVersionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionnaireVersionOrderByWithRelationInput>;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

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
