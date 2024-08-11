import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeCategoryCountAggregate } from './recipe-category-count-aggregate.output';
import { RecipeCategoryMinAggregate } from './recipe-category-min-aggregate.output';
import { RecipeCategoryMaxAggregate } from './recipe-category-max-aggregate.output';

@ObjectType()
export class RecipeCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeCategoryCountAggregate, {nullable:true})
    _count?: RecipeCategoryCountAggregate;

    @Field(() => RecipeCategoryMinAggregate, {nullable:true})
    _min?: RecipeCategoryMinAggregate;

    @Field(() => RecipeCategoryMaxAggregate, {nullable:true})
    _max?: RecipeCategoryMaxAggregate;
}
