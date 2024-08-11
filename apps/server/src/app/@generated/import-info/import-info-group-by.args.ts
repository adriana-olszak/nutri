import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoOrderByWithAggregationInput } from './import-info-order-by-with-aggregation.input';
import { ImportInfoScalarFieldEnum } from './import-info-scalar-field.enum';
import { ImportInfoScalarWhereWithAggregatesInput } from './import-info-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImportInfoCountAggregateInput } from './import-info-count-aggregate.input';
import { ImportInfoMinAggregateInput } from './import-info-min-aggregate.input';
import { ImportInfoMaxAggregateInput } from './import-info-max-aggregate.input';

@ArgsType()
export class ImportInfoGroupByArgs {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => [ImportInfoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImportInfoOrderByWithAggregationInput>;

    @Field(() => [ImportInfoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImportInfoScalarFieldEnum>;

    @Field(() => ImportInfoScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImportInfoScalarWhereWithAggregatesInput;

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
