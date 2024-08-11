import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationWhereInput } from './translation-where.input';
import { Type } from 'class-transformer';
import { TranslationOrderByWithAggregationInput } from './translation-order-by-with-aggregation.input';
import { TranslationScalarFieldEnum } from './translation-scalar-field.enum';
import { TranslationScalarWhereWithAggregatesInput } from './translation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TranslationCountAggregateInput } from './translation-count-aggregate.input';
import { TranslationMinAggregateInput } from './translation-min-aggregate.input';
import { TranslationMaxAggregateInput } from './translation-max-aggregate.input';

@ArgsType()
export class TranslationGroupByArgs {

    @Field(() => TranslationWhereInput, {nullable:true})
    @Type(() => TranslationWhereInput)
    where?: TranslationWhereInput;

    @Field(() => [TranslationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TranslationOrderByWithAggregationInput>;

    @Field(() => [TranslationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TranslationScalarFieldEnum>;

    @Field(() => TranslationScalarWhereWithAggregatesInput, {nullable:true})
    having?: TranslationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TranslationCountAggregateInput, {nullable:true})
    _count?: TranslationCountAggregateInput;

    @Field(() => TranslationMinAggregateInput, {nullable:true})
    _min?: TranslationMinAggregateInput;

    @Field(() => TranslationMaxAggregateInput, {nullable:true})
    _max?: TranslationMaxAggregateInput;
}
