import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodSearchVectorWhereInput } from './food-search-vector-where.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorOrderByWithAggregationInput } from './food-search-vector-order-by-with-aggregation.input';
import { FoodSearchVectorScalarFieldEnum } from './food-search-vector-scalar-field.enum';
import { FoodSearchVectorScalarWhereWithAggregatesInput } from './food-search-vector-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodSearchVectorCountAggregateInput } from './food-search-vector-count-aggregate.input';
import { FoodSearchVectorMinAggregateInput } from './food-search-vector-min-aggregate.input';
import { FoodSearchVectorMaxAggregateInput } from './food-search-vector-max-aggregate.input';

@ArgsType()
export class FoodSearchVectorGroupByArgs {

    @Field(() => FoodSearchVectorWhereInput, {nullable:true})
    @Type(() => FoodSearchVectorWhereInput)
    where?: FoodSearchVectorWhereInput;

    @Field(() => [FoodSearchVectorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodSearchVectorOrderByWithAggregationInput>;

    @Field(() => [FoodSearchVectorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodSearchVectorScalarFieldEnum>;

    @Field(() => FoodSearchVectorScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodSearchVectorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodSearchVectorCountAggregateInput, {nullable:true})
    _count?: FoodSearchVectorCountAggregateInput;

    @Field(() => FoodSearchVectorMinAggregateInput, {nullable:true})
    _min?: FoodSearchVectorMinAggregateInput;

    @Field(() => FoodSearchVectorMaxAggregateInput, {nullable:true})
    _max?: FoodSearchVectorMaxAggregateInput;
}
