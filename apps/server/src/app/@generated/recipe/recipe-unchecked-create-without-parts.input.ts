import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-recipe.input';
import { RecipeCategoryUncheckedCreateNestedManyWithoutRecipesInput } from '../recipe-category/recipe-category-unchecked-create-nested-many-without-recipes.input';
import { RecipeImageUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-image/recipe-image-unchecked-create-nested-many-without-recipe.input';
import { SeasonUncheckedCreateNestedManyWithoutRecipesInput } from '../season/season-unchecked-create-nested-many-without-recipes.input';
import { TagUncheckedCreateNestedManyWithoutRecipesInput } from '../tag/tag-unchecked-create-nested-many-without-recipes.input';

@InputType()
export class RecipeUncheckedCreateWithoutPartsInput {

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

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeCategoryUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    categories?: RecipeCategoryUncheckedCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeImageUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    images?: RecipeImageUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => SeasonUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    seasons?: SeasonUncheckedCreateNestedManyWithoutRecipesInput;

    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutRecipesInput;
}
