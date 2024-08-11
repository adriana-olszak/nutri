import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Type } from 'class-transformer';
import { RecipePartOrderByWithRelationInput } from './recipe-part-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipePartWhereUniqueInput } from './recipe-part-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipePartCountAggregateInput } from './recipe-part-count-aggregate.input';
import { RecipePartMinAggregateInput } from './recipe-part-min-aggregate.input';
import { RecipePartMaxAggregateInput } from './recipe-part-max-aggregate.input';

@ArgsType()
export class RecipePartAggregateArgs {

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;

    @Field(() => [RecipePartOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipePartOrderByWithRelationInput>;

    @Field(() => RecipePartWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipePartWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipePartCountAggregateInput, {nullable:true})
    _count?: RecipePartCountAggregateInput;

    @Field(() => RecipePartMinAggregateInput, {nullable:true})
    _min?: RecipePartMinAggregateInput;

    @Field(() => RecipePartMaxAggregateInput, {nullable:true})
    _max?: RecipePartMaxAggregateInput;
}
