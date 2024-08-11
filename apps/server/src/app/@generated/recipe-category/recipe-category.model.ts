import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { RecipeCategoryCount } from './recipe-category-count.output';

@ObjectType()
export class RecipeCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;

    @Field(() => RecipeCategoryCount, {nullable:false})
    _count?: RecipeCategoryCount;
}
