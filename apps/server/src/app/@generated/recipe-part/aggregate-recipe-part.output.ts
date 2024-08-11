import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipePartCountAggregate } from './recipe-part-count-aggregate.output';
import { RecipePartMinAggregate } from './recipe-part-min-aggregate.output';
import { RecipePartMaxAggregate } from './recipe-part-max-aggregate.output';

@ObjectType()
export class AggregateRecipePart {

    @Field(() => RecipePartCountAggregate, {nullable:true})
    _count?: RecipePartCountAggregate;

    @Field(() => RecipePartMinAggregate, {nullable:true})
    _min?: RecipePartMinAggregate;

    @Field(() => RecipePartMaxAggregate, {nullable:true})
    _max?: RecipePartMaxAggregate;
}
