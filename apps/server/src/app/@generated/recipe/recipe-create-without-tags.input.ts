import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipePartCreateNestedManyWithoutRecipeInput } from '../recipe-part/recipe-part-create-nested-many-without-recipe.input';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { RecipeCategoryCreateNestedManyWithoutRecipesInput } from '../recipe-category/recipe-category-create-nested-many-without-recipes.input';
import { RecipeImageCreateNestedManyWithoutRecipeInput } from '../recipe-image/recipe-image-create-nested-many-without-recipe.input';
import { SeasonCreateNestedManyWithoutRecipesInput } from '../season/season-create-nested-many-without-recipes.input';

@InputType()
export class RecipeCreateWithoutTagsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => String, {nullable:true})
    sourceUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    cookingTime?: string;

    @Field(() => String, {nullable:true})
    prepTime?: string;

    @Field(() => String, {nullable:true})
    instructions?: string;

    @Field(() => String, {nullable:true})
    servingsText?: string;

    @Field(() => Int, {nullable:true})
    servingsMin?: number;

    @Field(() => Int, {nullable:true})
    servingsMax?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipePartCreateNestedManyWithoutRecipeInput, {nullable:true})
    parts?: RecipePartCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeCategoryCreateNestedManyWithoutRecipesInput, {nullable:true})
    categories?: RecipeCategoryCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeImageCreateNestedManyWithoutRecipeInput, {nullable:true})
    images?: RecipeImageCreateNestedManyWithoutRecipeInput;

    @Field(() => SeasonCreateNestedManyWithoutRecipesInput, {nullable:true})
    seasons?: SeasonCreateNestedManyWithoutRecipesInput;
}
