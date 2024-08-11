import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';
import { Type } from 'class-transformer';
import { MeasureUnitOrderByWithAggregationInput } from './measure-unit-order-by-with-aggregation.input';
import { MeasureUnitScalarFieldEnum } from './measure-unit-scalar-field.enum';
import { MeasureUnitScalarWhereWithAggregatesInput } from './measure-unit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MeasureUnitCountAggregateInput } from './measure-unit-count-aggregate.input';
import { MeasureUnitMinAggregateInput } from './measure-unit-min-aggregate.input';
import { MeasureUnitMaxAggregateInput } from './measure-unit-max-aggregate.input';

@ArgsType()
export class MeasureUnitGroupByArgs {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;

    @Field(() => [MeasureUnitOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MeasureUnitOrderByWithAggregationInput>;

    @Field(() => [MeasureUnitScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MeasureUnitScalarFieldEnum>;

    @Field(() => MeasureUnitScalarWhereWithAggregatesInput, {nullable:true})
    having?: MeasureUnitScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MeasureUnitCountAggregateInput, {nullable:true})
    _count?: MeasureUnitCountAggregateInput;

    @Field(() => MeasureUnitMinAggregateInput, {nullable:true})
    _min?: MeasureUnitMinAggregateInput;

    @Field(() => MeasureUnitMaxAggregateInput, {nullable:true})
    _max?: MeasureUnitMaxAggregateInput;
}
