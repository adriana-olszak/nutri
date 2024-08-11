import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUncheckedUpdateManyWithoutSeasonsNestedInput } from '../recipe/recipe-unchecked-update-many-without-seasons-nested.input';

@InputType()
export class SeasonUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUncheckedUpdateManyWithoutSeasonsNestedInput, {nullable:true})
    recipes?: RecipeUncheckedUpdateManyWithoutSeasonsNestedInput;
}
