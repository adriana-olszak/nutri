import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeInstructionsCountAggregate } from './recipe-instructions-count-aggregate.output';
import { RecipeInstructionsAvgAggregate } from './recipe-instructions-avg-aggregate.output';
import { RecipeInstructionsSumAggregate } from './recipe-instructions-sum-aggregate.output';
import { RecipeInstructionsMinAggregate } from './recipe-instructions-min-aggregate.output';
import { RecipeInstructionsMaxAggregate } from './recipe-instructions-max-aggregate.output';

@ObjectType()
export class AggregateRecipeInstructions {

    @Field(() => RecipeInstructionsCountAggregate, {nullable:true})
    _count?: RecipeInstructionsCountAggregate;

    @Field(() => RecipeInstructionsAvgAggregate, {nullable:true})
    _avg?: RecipeInstructionsAvgAggregate;

    @Field(() => RecipeInstructionsSumAggregate, {nullable:true})
    _sum?: RecipeInstructionsSumAggregate;

    @Field(() => RecipeInstructionsMinAggregate, {nullable:true})
    _min?: RecipeInstructionsMinAggregate;

    @Field(() => RecipeInstructionsMaxAggregate, {nullable:true})
    _max?: RecipeInstructionsMaxAggregate;
}
