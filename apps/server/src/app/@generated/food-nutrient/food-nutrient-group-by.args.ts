import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';
import { Type } from 'class-transformer';
import { FoodNutrientOrderByWithAggregationInput } from './food-nutrient-order-by-with-aggregation.input';
import { FoodNutrientScalarFieldEnum } from './food-nutrient-scalar-field.enum';
import { FoodNutrientScalarWhereWithAggregatesInput } from './food-nutrient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodNutrientCountAggregateInput } from './food-nutrient-count-aggregate.input';
import { FoodNutrientAvgAggregateInput } from './food-nutrient-avg-aggregate.input';
import { FoodNutrientSumAggregateInput } from './food-nutrient-sum-aggregate.input';
import { FoodNutrientMinAggregateInput } from './food-nutrient-min-aggregate.input';
import { FoodNutrientMaxAggregateInput } from './food-nutrient-max-aggregate.input';

@ArgsType()
export class FoodNutrientGroupByArgs {

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    @Type(() => FoodNutrientWhereInput)
    where?: FoodNutrientWhereInput;

    @Field(() => [FoodNutrientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodNutrientOrderByWithAggregationInput>;

    @Field(() => [FoodNutrientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodNutrientScalarFieldEnum>;

    @Field(() => FoodNutrientScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodNutrientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodNutrientCountAggregateInput, {nullable:true})
    _count?: FoodNutrientCountAggregateInput;

    @Field(() => FoodNutrientAvgAggregateInput, {nullable:true})
    _avg?: FoodNutrientAvgAggregateInput;

    @Field(() => FoodNutrientSumAggregateInput, {nullable:true})
    _sum?: FoodNutrientSumAggregateInput;

    @Field(() => FoodNutrientMinAggregateInput, {nullable:true})
    _min?: FoodNutrientMinAggregateInput;

    @Field(() => FoodNutrientMaxAggregateInput, {nullable:true})
    _max?: FoodNutrientMaxAggregateInput;
}
