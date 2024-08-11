import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUncheckedUpdateManyWithoutCategoriesNestedInput } from '../recipe/recipe-unchecked-update-many-without-categories-nested.input';

@InputType()
export class RecipeCategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    recipes?: RecipeUncheckedUpdateManyWithoutCategoriesNestedInput;
}
