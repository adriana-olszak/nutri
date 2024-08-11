import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationWhereInput } from './translation-where.input';
import { Type } from 'class-transformer';
import { TranslationOrderByWithRelationInput } from './translation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TranslationCountAggregateInput } from './translation-count-aggregate.input';
import { TranslationMinAggregateInput } from './translation-min-aggregate.input';
import { TranslationMaxAggregateInput } from './translation-max-aggregate.input';

@ArgsType()
export class TranslationAggregateArgs {

    @Field(() => TranslationWhereInput, {nullable:true})
    @Type(() => TranslationWhereInput)
    where?: TranslationWhereInput;

    @Field(() => [TranslationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TranslationOrderByWithRelationInput>;

    @Field(() => TranslationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>;

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
