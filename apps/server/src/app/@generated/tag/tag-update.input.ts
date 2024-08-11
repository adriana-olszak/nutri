import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateManyWithoutTagsNestedInput } from '../recipe/recipe-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutTagsNestedInput;
}
