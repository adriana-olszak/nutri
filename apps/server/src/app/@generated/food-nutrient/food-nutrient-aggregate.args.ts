import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';
import { Type } from 'class-transformer';
import { FoodNutrientOrderByWithRelationInput } from './food-nutrient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodNutrientCountAggregateInput } from './food-nutrient-count-aggregate.input';
import { FoodNutrientAvgAggregateInput } from './food-nutrient-avg-aggregate.input';
import { FoodNutrientSumAggregateInput } from './food-nutrient-sum-aggregate.input';
import { FoodNutrientMinAggregateInput } from './food-nutrient-min-aggregate.input';
import { FoodNutrientMaxAggregateInput } from './food-nutrient-max-aggregate.input';

@ArgsType()
export class FoodNutrientAggregateArgs {

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    @Type(() => FoodNutrientWhereInput)
    where?: FoodNutrientWhereInput;

    @Field(() => [FoodNutrientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodNutrientOrderByWithRelationInput>;

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

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
