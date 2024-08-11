import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOrderByWithAggregationInput } from './food-category-order-by-with-aggregation.input';
import { FoodCategoryScalarFieldEnum } from './food-category-scalar-field.enum';
import { FoodCategoryScalarWhereWithAggregatesInput } from './food-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodCategoryCountAggregateInput } from './food-category-count-aggregate.input';
import { FoodCategoryAvgAggregateInput } from './food-category-avg-aggregate.input';
import { FoodCategorySumAggregateInput } from './food-category-sum-aggregate.input';
import { FoodCategoryMinAggregateInput } from './food-category-min-aggregate.input';
import { FoodCategoryMaxAggregateInput } from './food-category-max-aggregate.input';

@ArgsType()
export class FoodCategoryGroupByArgs {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;

    @Field(() => [FoodCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodCategoryOrderByWithAggregationInput>;

    @Field(() => [FoodCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodCategoryScalarFieldEnum>;

    @Field(() => FoodCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodCategoryCountAggregateInput, {nullable:true})
    _count?: FoodCategoryCountAggregateInput;

    @Field(() => FoodCategoryAvgAggregateInput, {nullable:true})
    _avg?: FoodCategoryAvgAggregateInput;

    @Field(() => FoodCategorySumAggregateInput, {nullable:true})
    _sum?: FoodCategorySumAggregateInput;

    @Field(() => FoodCategoryMinAggregateInput, {nullable:true})
    _min?: FoodCategoryMinAggregateInput;

    @Field(() => FoodCategoryMaxAggregateInput, {nullable:true})
    _max?: FoodCategoryMaxAggregateInput;
}
