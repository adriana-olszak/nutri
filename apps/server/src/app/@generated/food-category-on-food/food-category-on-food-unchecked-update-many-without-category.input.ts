import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class FoodCategoryOnFoodUncheckedUpdateManyWithoutCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    foodId?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrimaryCategory?: BoolFieldUpdateOperationsInput;
}
