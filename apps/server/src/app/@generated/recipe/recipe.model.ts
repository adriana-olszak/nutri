import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeInstructions } from '../recipe-instructions/recipe-instructions.model';
import { RecipePart } from '../recipe-part/recipe-part.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { RecipeCategory } from '../recipe-category/recipe-category.model';
import { RecipeImage } from '../recipe-image/recipe-image.model';
import { Season } from '../season/season.model';
import { Tag } from '../tag/tag.model';
import { RecipeCount } from './recipe-count.output';

@ObjectType()
export class Recipe {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    sourceId!: string | null;

    @Field(() => String, {nullable:true})
    sourceUrl!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    cookingTime!: string | null;

    @Field(() => String, {nullable:true})
    prepTime!: string | null;

    @Field(() => String, {nullable:true})
    servingsText!: string | null;

    @Field(() => Int, {nullable:true})
    servingsMin!: number | null;

    @Field(() => Int, {nullable:true})
    servingsMax!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RecipeInstructions], {nullable:true})
    instructions?: Array<RecipeInstructions>;

    @Field(() => [RecipePart], {nullable:true})
    parts?: Array<RecipePart>;

    @Field(() => [RecipeIngredient], {nullable:true})
    ingredients?: Array<RecipeIngredient>;

    @Field(() => [RecipeCategory], {nullable:true})
    categories?: Array<RecipeCategory>;

    @Field(() => [RecipeImage], {nullable:true})
    images?: Array<RecipeImage>;

    @Field(() => [Season], {nullable:true})
    seasons?: Array<Season>;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => RecipeCount, {nullable:false})
    _count?: RecipeCount;
}
