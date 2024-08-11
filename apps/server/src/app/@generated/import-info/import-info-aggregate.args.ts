import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoOrderByWithRelationInput } from './import-info-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImportInfoCountAggregateInput } from './import-info-count-aggregate.input';
import { ImportInfoMinAggregateInput } from './import-info-min-aggregate.input';
import { ImportInfoMaxAggregateInput } from './import-info-max-aggregate.input';

@ArgsType()
export class ImportInfoAggregateArgs {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => [ImportInfoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImportInfoOrderByWithRelationInput>;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImportInfoCountAggregateInput, {nullable:true})
    _count?: ImportInfoCountAggregateInput;

    @Field(() => ImportInfoMinAggregateInput, {nullable:true})
    _min?: ImportInfoMinAggregateInput;

    @Field(() => ImportInfoMaxAggregateInput, {nullable:true})
    _max?: ImportInfoMaxAggregateInput;
}
