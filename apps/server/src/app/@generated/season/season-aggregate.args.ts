import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeasonWhereInput } from './season-where.input';
import { Type } from 'class-transformer';
import { SeasonOrderByWithRelationInput } from './season-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SeasonWhereUniqueInput } from './season-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SeasonCountAggregateInput } from './season-count-aggregate.input';
import { SeasonMinAggregateInput } from './season-min-aggregate.input';
import { SeasonMaxAggregateInput } from './season-max-aggregate.input';

@ArgsType()
export class SeasonAggregateArgs {

    @Field(() => SeasonWhereInput, {nullable:true})
    @Type(() => SeasonWhereInput)
    where?: SeasonWhereInput;

    @Field(() => [SeasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SeasonOrderByWithRelationInput>;

    @Field(() => SeasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SeasonWhereUniqueInput, 'id' | 'name'>;

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
