import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';
import { Type } from 'class-transformer';
import { SeasonOrderByWithAggregationInput } from './season-order-by-with-aggregation.input';
import { SeasonScalarFieldEnum } from './season-scalar-field.enum';
import { SeasonScalarWhereWithAggregatesInput } from './season-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SeasonCountAggregateInput } from './season-count-aggregate.input';
import { SeasonMinAggregateInput } from './season-min-aggregate.input';
import { SeasonMaxAggregateInput } from './season-max-aggregate.input';

@ArgsType()
export class SeasonGroupByArgs {

    @Field(() => SeasonWhereInput, {nullable:true})
    @Type(() => SeasonWhereInput)
    where?: SeasonWhereInput;

    @Field(() => [SeasonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SeasonOrderByWithAggregationInput>;

    @Field(() => [SeasonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SeasonScalarFieldEnum>;

    @Field(() => SeasonScalarWhereWithAggregatesInput, {nullable:true})
    having?: SeasonScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SeasonCountAggregateInput, {nullable:true})
    _count?: SeasonCountAggregateInput;

    @Field(() => SeasonMinAggregateInput, {nullable:true})
    _min?: SeasonMinAggregateInput;

    @Field(() => SeasonMaxAggregateInput, {nullable:true})
    _max?: SeasonMaxAggregateInput;
}
