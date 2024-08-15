import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeInstructionsUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-instructions/recipe-instructions-unchecked-update-many-without-recipe-nested.input';
import { RecipePartUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-part/recipe-part-unchecked-update-many-without-recipe-nested.input';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { RecipeCategoryUncheckedUpdateManyWithoutRecipesNestedInput } from '../recipe-category/recipe-category-unchecked-update-many-without-recipes-nested.input';
import { SeasonUncheckedUpdateManyWithoutRecipesNestedInput } from '../season/season-unchecked-update-many-without-recipes-nested.input';
import { TagUncheckedUpdateManyWithoutRecipesNestedInput } from '../tag/tag-unchecked-update-many-without-recipes-nested.input';

@InputType()
export class RecipeUncheckedUpdateWithoutImagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sourceUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cookingTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    prepTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    servingsText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    servingsMin?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    servingsMax?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeInstructionsUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    instructions?: RecipeInstructionsUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipePartUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    parts?: RecipePartUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeCategoryUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    categories?: RecipeCategoryUncheckedUpdateManyWithoutRecipesNestedInput;

    @Field(() => SeasonUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    seasons?: SeasonUncheckedUpdateManyWithoutRecipesNestedInput;

    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutRecipesNestedInput;
}
