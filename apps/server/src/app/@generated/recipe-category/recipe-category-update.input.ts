import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateManyWithoutCategoriesNestedInput } from '../recipe/recipe-update-many-without-categories-nested.input';

@InputType()
export class RecipeCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutCategoriesNestedInput;
}
