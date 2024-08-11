import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateManyWithoutSeasonsNestedInput } from '../recipe/recipe-update-many-without-seasons-nested.input';

@InputType()
export class SeasonUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateManyWithoutSeasonsNestedInput, {nullable:true})
    recipes?: RecipeUpdateManyWithoutSeasonsNestedInput;
}
