import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsOrderByWithAggregationInput } from './recipe-instructions-order-by-with-aggregation.input';
import { RecipeInstructionsScalarFieldEnum } from './recipe-instructions-scalar-field.enum';
import { RecipeInstructionsScalarWhereWithAggregatesInput } from './recipe-instructions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionsCountAggregateInput } from './recipe-instructions-count-aggregate.input';
import { RecipeInstructionsAvgAggregateInput } from './recipe-instructions-avg-aggregate.input';
import { RecipeInstructionsSumAggregateInput } from './recipe-instructions-sum-aggregate.input';
import { RecipeInstructionsMinAggregateInput } from './recipe-instructions-min-aggregate.input';
import { RecipeInstructionsMaxAggregateInput } from './recipe-instructions-max-aggregate.input';

@ArgsType()
export class RecipeInstructionsGroupByArgs {

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    @Type(() => RecipeInstructionsWhereInput)
    where?: RecipeInstructionsWhereInput;

    @Field(() => [RecipeInstructionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeInstructionsOrderByWithAggregationInput>;

    @Field(() => [RecipeInstructionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecipeInstructionsScalarFieldEnum>;

    @Field(() => RecipeInstructionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeInstructionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeInstructionsCountAggregateInput, {nullable:true})
    _count?: RecipeInstructionsCountAggregateInput;

    @Field(() => RecipeInstructionsAvgAggregateInput, {nullable:true})
    _avg?: RecipeInstructionsAvgAggregateInput;

    @Field(() => RecipeInstructionsSumAggregateInput, {nullable:true})
    _sum?: RecipeInstructionsSumAggregateInput;

    @Field(() => RecipeInstructionsMinAggregateInput, {nullable:true})
    _min?: RecipeInstructionsMinAggregateInput;

    @Field(() => RecipeInstructionsMaxAggregateInput, {nullable:true})
    _max?: RecipeInstructionsMaxAggregateInput;
}
