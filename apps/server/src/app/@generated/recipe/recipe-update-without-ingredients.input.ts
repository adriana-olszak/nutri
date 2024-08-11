import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipePartUpdateManyWithoutRecipeNestedInput } from '../recipe-part/recipe-part-update-many-without-recipe-nested.input';
import { RecipeCategoryUpdateManyWithoutRecipesNestedInput } from '../recipe-category/recipe-category-update-many-without-recipes-nested.input';
import { RecipeImageUpdateManyWithoutRecipeNestedInput } from '../recipe-image/recipe-image-update-many-without-recipe-nested.input';
import { SeasonUpdateManyWithoutRecipesNestedInput } from '../season/season-update-many-without-recipes-nested.input';
import { TagUpdateManyWithoutRecipesNestedInput } from '../tag/tag-update-many-without-recipes-nested.input';

@InputType()
export class RecipeUpdateWithoutIngredientsInput {

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
    instructions?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => RecipePartUpdateManyWithoutRecipeNestedInput, {nullable:true})
    parts?: RecipePartUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeCategoryUpdateManyWithoutRecipesNestedInput, {nullable:true})
    categories?: RecipeCategoryUpdateManyWithoutRecipesNestedInput;

    @Field(() => RecipeImageUpdateManyWithoutRecipeNestedInput, {nullable:true})
    images?: RecipeImageUpdateManyWithoutRecipeNestedInput;

    @Field(() => SeasonUpdateManyWithoutRecipesNestedInput, {nullable:true})
    seasons?: SeasonUpdateManyWithoutRecipesNestedInput;

    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutRecipesNestedInput;
}
