import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionsCreateNestedManyWithoutRecipeInput } from '../recipe-instructions/recipe-instructions-create-nested-many-without-recipe.input';
import { RecipePartCreateNestedManyWithoutRecipeInput } from '../recipe-part/recipe-part-create-nested-many-without-recipe.input';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { RecipeCategoryCreateNestedManyWithoutRecipesInput } from '../recipe-category/recipe-category-create-nested-many-without-recipes.input';
import { RecipeImageCreateNestedManyWithoutRecipeInput } from '../recipe-image/recipe-image-create-nested-many-without-recipe.input';
import { TagCreateNestedManyWithoutRecipesInput } from '../tag/tag-create-nested-many-without-recipes.input';

@InputType()
export class RecipeCreateWithoutSeasonsInput {

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
    servingsText?: string;

    @Field(() => Int, {nullable:true})
    servingsMin?: number;

    @Field(() => Int, {nullable:true})
    servingsMax?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeInstructionsCreateNestedManyWithoutRecipeInput, {nullable:true})
    instructions?: RecipeInstructionsCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipePartCreateNestedManyWithoutRecipeInput, {nullable:true})
    parts?: RecipePartCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeCategoryCreateNestedManyWithoutRecipesInput, {nullable:true})
    categories?: RecipeCategoryCreateNestedManyWithoutRecipesInput;

    @Field(() => RecipeImageCreateNestedManyWithoutRecipeInput, {nullable:true})
    images?: RecipeImageCreateNestedManyWithoutRecipeInput;

    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutRecipesInput;
}
